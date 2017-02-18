import React from 'react';

const Comment = ({comment, deleteComment, showDelete}) => {
  return (
    <div key={comment.id}>
      <span className="photo">
        <img className="comments photo" src={ comment.user.photo_url } />
      </span>

      <ul>
        <li>
          <h5>{ comment.user.username }</h5>
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
