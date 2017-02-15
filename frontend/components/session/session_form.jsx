import React from 'react';
import { Link, withRouter } from 'react-router';

const guestUser = {
  username: "guest",
  password: "password"
};

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "", errors: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleErrors (errors) {
    this.setState({ errors: errors.responseJSON.errors });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.setUser())
      .then(() => this.props.closeModal(),
      this.handleErrors);
  }

  updateProperty (property) {
    return (e) => (
      this.setState({ [property]: e.target.value })
    );
  }

  guestLogin () {
    this.props.login(guestUser).then(() => this.props.closeModal());
  }

  setUser () {
    return {
      username: this.state.username,
      password: this.state.password
    };
  }

  render () {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";
    const errors = this.state.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));

    return (
      <section className="form">
        <div className="errors">{ errors }</div>
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
