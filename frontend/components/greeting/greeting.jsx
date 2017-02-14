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
    )
  }

  return (
    <div>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
}

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
