import { RECEIVE_COMMENTS } from '../actions/comment_actions';

const CommentReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default CommentReducer;
