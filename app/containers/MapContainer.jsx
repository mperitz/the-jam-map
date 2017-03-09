import { connect } from 'react-redux';
import JamMap from '../components/JamMap';

const mapStateToProps = state => ({
  markers: [{
    position: {lat: 25.0112, lng: 121.5206}
  }]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(JamMap);
