import React from 'react';
import { Link, withRouter } from 'react-router';

const guestUser = {
  username: "guest",
  password: "password"
};

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.closeModal());
  }

  updateProperty (property) {
    return (e) => (
      this.setState({ [property]: e.target.value })
    );
  }

  guestLogin () {
    this.props.login(guestUser).then(() => this.props.closeModal());
  }

  render () {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";

    return (
      <section className="form">

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.updateProperty("username")}
            placeholder="Username" />
          <input
            type="password"
            value={this.state.password}
            onChange={this.updateProperty("password")}
            placeholder="Password" />
          <button onClick={this.handleSubmit} className="orange">{text}</button>
        </form>

        <Link onClick={this.guestLogin}>Guest Login</Link>
      </section>
    );
  }
}

export default withRouter(SessionForm);
