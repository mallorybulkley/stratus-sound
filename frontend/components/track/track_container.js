import { connect } from 'react-redux';
import Track from './track';
import { fetchTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  track: state.track
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: (id) => dispatch(fetchTrack(ownProps.params.trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
