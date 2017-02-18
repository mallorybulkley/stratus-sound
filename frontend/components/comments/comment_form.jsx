import React from 'react';

class CommentForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = { body: "", track_id: this.props.trackId }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.trackId !== this.props.trackId) {
      this.setState({ track_id: nextProps.trackId });
    }
  }

  handleSubmit (e) {
    e.preventDefault();

    this.props.createComment(this.state)
      .then(this.setState({ body: "" }));
  }

  updateComment (e) {
    this.setState({ body: e.target.value });
  }

  render () {
    if (!this.props.currentUser.id) return (<div></div>);

    return (
      <section className="comment-form">
        <img src={ this.props.currentUser.photo_url }/>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input
            onChange={ this.updateComment.bind(this) }
            type="text"
            placeholder="Comment"
            value={ this.state.body } />
        </form>
      </section>
    )
  }
}

export default CommentForm;
