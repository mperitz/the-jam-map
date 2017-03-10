'use strict'; // eslint-disable-line semi
const axios = require('axios')
// axios.baseURL = 'https://api.eventful.com'

const app = require('APP')
const {env} = app

const show = require('express').Router() // eslint-disable-line new-cap

show.get('/', (req, res, next) => {
  console.log(axios.baseURL)
  // const { query } = req.query
  axios.get(`https://api.eventful.com/json/events/search?app_key=9Q6FrTNVBFTwgtWW&q=music&location=New+York`)
  .then(response => {
    res.json(response.data)
  })
  .catch(next)
  // app_key=9Q6FrTNVBFTwgtWW&
  // /json/events/search?app_key=9Q6FrTNVBFTwgtWW&q=music&location=New+York&
  // res.send('hello')
})

module.exports = show
