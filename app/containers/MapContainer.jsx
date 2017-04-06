import { connect } from 'react-redux'
import JamMap from '../components/JamMap'
import { getMarkersFromEventsArr } from '../utils'

import { selectShow } from '../reducers/map'

const mapStateToProps = state => ({
  markers: state.map.shows && getMarkersFromEventsArr(state.map.shows)
})

const mapDispatchToProps = dispatch => ({
  onMarkerClick: (marker) => {
    dispatch(selectShow(marker.event))
    setTimeout(() => marker.showInfo = true, 100)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(JamMap)
