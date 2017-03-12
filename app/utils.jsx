/* global google */
import ShowInfoContainer from './containers/ShowInfoContainer'
import React from 'react'

const iconBase = '../icons'
const icons = {
  Rock: {icon: iconBase + 'guitar.png'},
  Pop: {icon: iconBase + 'star.png'},
  Country: {icon: iconBase + 'cowboy.png'},
  'R&B': {icon: iconBase + 'moon.png'},
  Folk: {icon: iconBase + 'banjo.png'},
  Funk: {icon: iconBase + 'sunglasses.png'},
  Jazz: {icon: iconBase + 'sax.png'},
  'Hip-Hop/Rap': {icon: iconBase + 'microphone.png'},
  World: {icon: iconBase + 'earth.png'},
  Latin: {icon: iconBase + 'maracas.png'},
  Reggae: {icon: iconBase + 'rasta.png'},
  Dance: {icon: iconBase + 'disco.png'},
}

export const getMarkersFromEventsArr = eventsArr => {
  return eventsArr.map(event => {
    const marker = {
      position: { lat: +event.venue.lat, lng: +event.venue.lng },
      event: event,
      animation: google.maps.Animation.DROP,
      showInfo: false,
      infoContent: (<ShowInfoContainer />)
      // icon: icons[event.genre.name].icon
    }
    // if (event.genre.name && icons[event.genre.name]) {
    //   marker.icon = icons[event.genre.name].icon
    // }
    return marker
  })
}

export const startDate = new Date()
let maxDate = new Date()
maxDate.setDate(maxDate.getDate() + 7)
export const endDate = maxDate

export const convertDate = date => {
  const year = `${date.getFullYear()}`
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  const time = `${date.toTimeString().slice(0, 8)}`
  return year + '-' + month + '-' + day + 'T' + time + 'Z'
}

export const convertGenre = genreNum => {
  const genres = ['All', 'Rock', 'Pop', 'Country', 'R&B', 'Folk', 'Funk', 'Jazz', 'Hip-Hop/Rap', 'World', 'Latin', 'Reggae', 'Dance/Electronic']
  return genres[genreNum - 1]
}

export const convertShowTime = timeStr => {
  const firstTwo = +timeStr.slice(0, 2)
  if (typeof firstTwo === 'number' && firstTwo > 12) return `${firstTwo - 12}:${timeStr.slice(3, 5)}PM`
  else return timeStr.split(':').slice(0, 2).join(':') + (firstTwo === 12 ? 'PM' : 'AM')
}
