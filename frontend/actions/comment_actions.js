import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
// export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
})

// export const receiveComment = (comment) => ({
//   type: RECEIVE_COMMENT,
//   comment
// })

export const fetchComments = (trackId) => (dispatch) => (
  CommentApiUtil.fetchComments(trackId)
    .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = (comment) => (dispatch) => (
  CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);
