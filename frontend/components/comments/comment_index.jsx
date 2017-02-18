import React from 'react';

class CommentIndex extends React.Component {
  constructor (props) {
    super(props)

    this.props.fetchComments(this.props.trackId);
  }

  render () {
    const comments = this.props.comments.map((comment) => (
      <div key={comment.id}>

          <img className="comments photo" src={ comment.user.photo_url } />

        <ul>
          <li>
            <h5>{ comment.user.username }</h5>
          </li>
          <li>
            { comment.body }
          </li>
        </ul>
      </div>
    ));

    return (
      <section className="comments">
        <h4>Comments</h4>
          { comments }
      </section>

    );
  }
}


export default CommentIndex;
