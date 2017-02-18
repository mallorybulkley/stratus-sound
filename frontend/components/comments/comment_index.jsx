import React from 'react';
import Comment from './comment';

class CommentIndex extends React.Component {
  constructor (props) {
    super(props)

    this.props.fetchComments(this.props.trackId);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.trackId !== this.props.trackId) {
      this.props.fetchComments(nextProps.trackId);
    }
  }

  componentWillUpdate (nextProps) {
    if (this.props.comments.length !== nextProps.comments.length) {
      this.props.fetchComments(nextProps.trackId);
    }
  }

  render () {
    const comments = this.props.comments.map((comment) => {
      if (!comment) return;
      return (
      <Comment key={comment.id} comment={comment} deleteComment={ this.props.deleteComment }
        showDelete={this.props.currentUser.id === comment.user.id} />
    )
  });

    return (
      <section className="comments">
        <h4>{ comments.length } Comments</h4>
          { comments }
      </section>

    );
  }
}


export default CommentIndex;
