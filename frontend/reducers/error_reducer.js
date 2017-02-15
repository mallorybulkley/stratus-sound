import { merge } from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const ErrorReducer = (state = { form: [] }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorReducer;
