import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist, addTrackToPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (playlist, trackId) => dispatch(createPlaylist(playlist, trackId)),
  addTrackToPlaylist: (playlistId, trackId) => dispatch(addTrackToPlaylist(playlistId, trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
