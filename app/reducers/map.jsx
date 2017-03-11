import axios from 'axios'
import { startDate, endDate } from '../utils'

const GET_SHOWS = 'GET_SHOWS'
const SELECT_SHOW = 'SELECT_SHOW'
const FILTER_SHOWS = 'FILTER_SHOWS'

const initialState = {
  shows: [],
  selectedShow: {
    name: '',
    id: '',
    infoUrl: '',
    imagesArr: [''],
    timeInfo: {
      date: '',
      time: ''
    },
    showInfo: '',
    pricing: {
      min: '',
      max: ''
    },
    venue: {
      name: '',
      infoUrl: '',
      address: {
        street: {line1: ''},
        city: '',
        state: '',
        zip: ''
      },
      lat: '',
      lng: ''
    },
    attractionsArr: ['']
  },
  startDate: startDate,
  endDate: endDate
}

// 2017-03-10T00:00:01Z

const reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_SHOWS:
      newState.shows = action.shows
      break
    case SELECT_SHOW:
      newState.selectedShow = action.show
      break
    case FILTER_SHOWS:
      newState.startDate = action.startDate
      newState.endDate = action.endDate
    default:
      return state
  }

  return newState

}

export const getShows = shows => ({
  type: GET_SHOWS, shows
})

export const selectShow = show => ({
  type: SELECT_SHOW, show
})

export const filterShows = filterObj => ({
  type: FILTER_SHOWS,
  filterObj
})

export default reducer
