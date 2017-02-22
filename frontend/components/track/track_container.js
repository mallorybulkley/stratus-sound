import { connect } from 'react-redux';
import Track from './track';
import { fetchTrack } from '../../actions/track_actions';
import { fetchTrackPlaylists } from '../../actions/playlist_actions';
import { receiveCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state, ownProps) => ({
  track: state.track,
  currentTrack: state.currentTrack,
  currentUser: state.session,
  playlists: state.playlist
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.params.trackId)),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  togglePlay: () => dispatch(togglePlay()),
  fetchTrackPlaylists: () => dispatch(fetchTrackPlaylists(ownProps.params.trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
