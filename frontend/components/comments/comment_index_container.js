import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: state.comments,
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (trackId) => dispatch(fetchComments(trackId)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
