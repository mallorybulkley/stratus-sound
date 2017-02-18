import * as UserApiUtil from '../util/user_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (id) => (dispatch) => (
  UserApiUtil.fetchUser(id)
    .then(data => dispatch(receiveUser(data)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
);
