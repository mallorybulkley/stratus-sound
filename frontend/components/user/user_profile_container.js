import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { fetchUserTracks } from '../../actions/tracks_actions';
import { receiveCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  tracks: state.tracks,
  playlist: state.playlist,
  currentTrack: state.currentTrack
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(ownProps.params.userId)),
  receiveCurrentTrack: (track, playlistId) => dispatch(receiveCurrentTrack(track, playlistId)),
  togglePlay: () => dispatch(togglePlay()),
  fetchUserPlaylists: () => dispatch(fetchUserPlaylists(ownProps.params.userId)),
  fetchUserTracks: () => dispatch(fetchUserTracks(ownProps.params.userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
