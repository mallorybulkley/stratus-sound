import { connect } from 'react-redux';
import TrackForm from './track_form';
import { uploadTrack, updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentUser: state.session,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  uploadTrack: (track) => dispatch(uploadTrack(track)),
  updateTrack: (trackId, track) => dispatch(updateTrack(trackId, track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
