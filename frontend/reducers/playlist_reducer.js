import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, RECEIVE_NEW_PLAYLIST } from '../actions/playlist_actions';

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return action.playlist;
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_NEW_PLAYLIST:
      return state.concat(action.playlist);
    default:
      return state;
  }
};

export default PlaylistReducer;
