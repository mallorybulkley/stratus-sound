import { RECEIVE_CURRENT_TRACK, TOGGLE_PLAY } from '../actions/current_track_actions';

const CurrentTrackReducer = (state = { track: null, playing: false, queue: [] }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      if (!action.queue) {
        return Object.assign({}, state, { track: action.track, playing: true })
      } else {
        return { track: action.track, playing: true, queue: action.queue }
      }
    case TOGGLE_PLAY:
      return Object.assign({}, state, { playing: !state.playing });
    default:
      return state;
  }
};

export default CurrentTrackReducer;
