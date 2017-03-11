import { connect } from 'react-redux';
import JamMap from '../components/JamMap';

import { selectShow } from '../reducers/map'

const getMarkersFromEventsArr = eventsArr => {
  return eventsArr.map(event => ({ position: { lat: +event.venue.lat, lng: +event.venue.lng }, event: event }))
}

const mapStateToProps = state => ({
  markers: state.map.shows && getMarkersFromEventsArr(state.map.shows)
});

const mapDispatchToProps = dispatch => ({
  onMarkerClick: (show) => {
    dispatch(selectShow(show))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(JamMap);
