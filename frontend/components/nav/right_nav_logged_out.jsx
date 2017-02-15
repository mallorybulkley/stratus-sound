import React from 'react';
import { Link } from 'react-router';

// onClick={props.openModal("login")}
//  onClick={props.openModal("signup")}
const RightNavLoggedOut = ({openModal}) => (
  <ul className="right">
    <li className="border">
      <a onClick={() => openModal("login")}>Sign In</a>
    </li>

    or

    <li>
      <a onClick={() => openModal("signup")}
        className="orange">Create Account</a>
    </li>

    <li>
      <Link to="/">Upload</Link>
    </li>
  </ul>
);

export default RightNavLoggedOut;
