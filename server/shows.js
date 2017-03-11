'use strict'; // eslint-disable-line semi
const axios = require('axios')
// axios.baseURL = 'https://api.eventful.com'

const app = require('APP')
const {env} = app

const show = require('express').Router() // eslint-disable-line new-cap

show.post('/', (req, res, next) => {
  console.log(axios.baseURL)
  // const { query } = req.query
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=345&page=0&apikey=g4tJkO8AdLZCtDt6ggl6pxhGxDK07oqX&startDateTime=2017-03-10T00:00:01Z&endDateTime=2017-03-10T23:59:59Z`)
  .then(response => {
    res.json(response.data._embedded.events.map(event => {
      return {
        name: event.name,
        id: event.id,
        infoUrl: event.url,
        genre: event.classifications[0].genre,
        imagesArr: event.images,
        timeInfo: {
          date: event.dates.start.localDate,
          time: event.dates.start.localTime
        },
        showInfo: event.info,
        pricing: {
          min: event.priceRanges && event.priceRanges.map(priceInfo => priceInfo.min)[0],
          max: event.priceRanges && event.priceRanges.map(priceInfo => priceInfo.max)[0]
        },
        venue: {
          name: event._embedded.venues[0].name,
          infoUrl: event._embedded.venues[0].url,
          address: {
            street: event._embedded.venues[0].address,
            city: event._embedded.venues[0].city.name,
            state: event._embedded.venues[0].state.stateCode,
            zip: event._embedded.venues[0].postalCode
          },
          lat: event._embedded.venues[0].location.latitude,
          lng: event._embedded.venues[0].location.longitude
        },
        attractionsArr: event._embedded.attractions && event._embedded.attractions.map(attraction => attraction.name)
      }
    }))
  })
  .catch(next)
  // app_key=9Q6FrTNVBFTwgtWW&
  // /json/events/search?app_key=9Q6FrTNVBFTwgtWW&q=music&location=New+York&
  // res.send('hello')
})

module.exports = show
