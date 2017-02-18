import { RECEIVE_CURRENT_TRACK, TOGGLE_PLAY } from '../actions/current_track_actions';

const CurrentTrackReducer = (state = { track: null, playing: false }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      return { track: action.track, playing: true };
    case TOGGLE_PLAY:
      return Object.assign({}, state, { playing: !state.playing });
    default:
      return state;
  }
};

export default CurrentTrackReducer;
