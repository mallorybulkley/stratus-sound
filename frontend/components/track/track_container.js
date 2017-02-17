import { connect } from 'react-redux';
import Track from './track';
import { fetchTrack } from '../../actions/track_actions';
import { fetchCurrentTrack,togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state, ownProps) => ({
  track: state.track,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: (id) => dispatch(fetchTrack(ownProps.params.trackId)),
  fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id)),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
