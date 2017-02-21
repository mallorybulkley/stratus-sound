import { RECEIVE_TRACKS } from '../actions/tracks_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const TracksReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_PLAYLIST:
      return action.playlist.tracks
    default:
      return state;
  }
};

export default TracksReducer;
