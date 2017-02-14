import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.router.push("/"));
  }

  updateProperty (property) {
    return (e) => {
      this.setState({ [property]: e.target.value });
    }
  }

  render () {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";
    const link = this.props.formType === "login" ? "/signup" : "/login";
    const linkText = this.props.formType === "login" ? "Sign Up" : "Log In";

    return (
      <section className="form'">
        <Link to={ link }>{ linkText }</Link>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.updateProperty("username")} />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.updateProperty("password")} />
          </label>
          <input type="submit" value={text} />
        </form>
      </section>
    )
  }
}

export default SessionForm;
