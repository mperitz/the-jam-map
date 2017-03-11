export const getMarkersFromEventsArr = eventsArr => {
  return eventsArr.map(event => ({ position: { lat: +event.venue.lat, lng: +event.venue.lng }, event: event }))
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
