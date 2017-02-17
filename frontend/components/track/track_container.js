import { connect } from 'react-redux';
import Track from './track';
import { fetchTrack } from '../../actions/track_actions';
import { fetchCurrentTrack } from '../../actions/current_track_actions';

const mapStateToProps = (state, ownProps) => ({
  track: state.track
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: (id) => dispatch(fetchTrack(ownProps.params.trackId)),
  fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
