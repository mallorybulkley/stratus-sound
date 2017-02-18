import { connect } from 'react-redux';
import TrackForm from './track_form';
import { uploadTrack } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({
  uploadTrack: (track) => dispatch(uploadTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
