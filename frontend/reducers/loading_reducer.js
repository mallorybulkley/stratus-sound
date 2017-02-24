import { START_LOADING, RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';

const LoadingReducer = (state = false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING:
      return true;
    case RECEIVE_TRACK:
    case RECEIVE_ERRORS:
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
