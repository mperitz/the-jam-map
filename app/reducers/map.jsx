import axios from 'axios'

const GET_SHOWS = 'GET_SHOWS'
const SELECT_SHOW = 'SELECT_SHOW'

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
  }
}

const reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_SHOWS:
      newState.shows = action.shows
      break
    case SELECT_SHOW:
      newState.selectedShow = action.show
      break
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

export const fetchShowsFromEventful = () =>
  dispatch =>
    axios.get('/api/shows/')
      .then((response) => {
        console.log('data', response.data)
        dispatch(getShows(response.data))
      })
      .catch((err) => console.error(err))

export default reducer
