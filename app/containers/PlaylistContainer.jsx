import { connect } from 'react-redux';
import Playlist from '../components/Playlist';

const mapStateToProps = state => ({
  show: state.map.selectedShow
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
