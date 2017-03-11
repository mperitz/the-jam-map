import { connect } from 'react-redux';
import ShowInfo from '../components/ShowInfo';

const mapStateToProps = state => ({
  show: state.map.selectedShow
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo);
