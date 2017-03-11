import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { getShows } from '../reducers/map'
import axios from 'axios'

const mapStateToProps = state => ({
  startDate: state.map.startDate,
  endDate: state.map.endDate
})

const mapDispatchToProps = dispatch => ({
  filterShows: filterObj => {
    axios.post('/api/shows', filterObj)
    .then(response => response.data)
    .then(eventObjArr => {
      dispatch(getShows(eventObjArr))
    })
    .catch(err => console.error(err))
  },
  getShowsByArtist: artist => {
    axios.get(`/api/shows/${artist}`)
    .then(response => response.data)
    .then(eventObjArr => {
      dispatch(getShows(eventObjArr))
    })
    .catch(err => console.error(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
