import { merge } from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
    case RECEIVE_TRACK:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default ErrorReducer;
