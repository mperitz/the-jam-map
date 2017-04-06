const convertShowDataArr = showArr => {
  return showArr.map(event => {
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
    })
}

const convertDate = date => {
  const year = `${date.getFullYear()}`
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  const time = `${date.toTimeString().slice(0, 8)}`
  return year + '-' + month + '-' + day + 'T' + time + 'Z'
}

module.exports = {
  convertShowDataArr,
  convertDate
}
