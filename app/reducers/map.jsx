import axios from 'axios'

const GET_SHOWS = 'GET_SHOWS'

const reducer = (state = null, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return action.shows
    default:
      return state
  }
}

export const getShows = shows => ({
  type: GET_SHOWS, shows
})

export const fetchShowsFromEventful = () =>
  dispatch =>
    axios.get('/api/shows/')
      .then((response) => dispatch(getShows(response.data)))
      .catch((err) => console.error(err))

export default reducer
