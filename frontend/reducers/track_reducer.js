import { RECEIVE_TRACK } from '../actions/track_actions';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default TrackReducer;
