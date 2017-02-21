import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { receiveCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(ownProps.params.userId)),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  togglePlay: () => dispatch(togglePlay()),
  fetchUserPlaylists: () => dispatch(fetchUserPlaylists(ownProps.params.userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
