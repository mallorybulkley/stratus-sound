import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router';

const Greeting = (props) => {
  if (props.currentUser.username) {
    return (
      <div>
        Hello, {props.currentUser.username}!
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  }

  // update Upload link later!
  return (
    <section className="nav">
      <ul className="nav">
        <li className="left logo">
          <Link to="/">Stratus Sound</Link>
        </li>
        <li className="left">
          <Link to="/">Home</Link>
        </li>
        <li>
          <input className="search" type="text" placeholder="Search"/>
        </li>
        <li className="right">
          <Link to='/login'>Sign In</Link>
        </li>
        <li>
          or
        </li>
        <li className="right">
          <Link to='/signup' className="orange">Create Account</Link>
        </li>
        <li>
          <Link to='/'>Upload</Link>
        </li>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
