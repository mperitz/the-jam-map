import { connect } from 'react-redux';
import JamMap from '../components/JamMap';

import { fetchShowsFromEventful } from '../reducers/map'

const getMarkersFromEventsArr = eventsArr => {
  return eventsArr.map(event => ({ position: { lat: +event.latitude, lng: +event.longitude } }))
}

const mapStateToProps = state => ({
  markers: state.map && getMarkersFromEventsArr(state.map)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(JamMap);
