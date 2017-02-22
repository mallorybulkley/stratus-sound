import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment, deleteComment, showDelete}) => {
  return (
    <div key={comment.id}>
      <span className="photo">
        <Link to={`users/${comment.user.id}`}>
          <img className="comments photo" src={ comment.user.photo_url } />
        </Link>
      </span>

      <ul>
        <li>
          <Link to={`users/${comment.user.id}`}>
            <h5>{ comment.user.username }</h5>
          </Link>
        </li>
        <li>
          { comment.body }
        </li>
      </ul>

      { showDelete ?
        <button onClick={ () => deleteComment(comment.id) }>
          <i className="fa fa-trash-o" aria-hidden="true"/>
        </button>
        : "" }

    </div>
  )
}

export default Comment;
