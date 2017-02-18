import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (trackId) => dispatch(fetchComments(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
