'use strict'; // eslint-disable-line semi
const axios = require('axios')
const show = require('express').Router() // eslint-disable-line new-cap
const utils = require('./utils')

const startDate = utils.convertDate(new Date())
let maxDate = new Date()
maxDate.setDate(maxDate.getDate() + 7)
const endDate = utils.convertDate(maxDate)

show.post('/', (req, res, next) => {
  const start = req.body.startDate ? req.body.startDate : startDate
  const end = req.body.endDate ? req.body.endDate : endDate
  const classification = req.body.genre && req.body.genre !== 'All' ? req.body.genre : 'music'
  console.log(start, end)
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${classification}&dmaId=345&size=200&apikey=${process.env.TM_KEY}&startDateTime=${start}&endDateTime=${end}`)
  .then(response => response.data)
  .then(data => data._embedded.events)
  .then(events => {
    console.log(events)
    res.json(utils.convertShowDataArr(events))
  })
  .catch(next)
})

show.get('/:artist', (req, res, next) => {
  const artist = req.params.artist
  axios.get(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${process.env.TM_KEY}&keyword=${artist}`)
  .then(response => response.data)
  .then(data => data._embedded.attractions[0])
  .then(artistObj => axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_KEY}&attractionId=${artistObj.id}`))
  .then(response => response.data)
  .then(data => data._embedded.events)
  .then(events => res.json(utils.convertShowDataArr(events)))
  .catch(next)
})

module.exports = show
