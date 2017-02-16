import React from 'react';
import { Link } from 'react-router';

const RightNavLoggedIn = ({currentUser, logout}) => (
  <ul className="right">
    <li>
      <Link to="/upload">Upload</Link>
    </li>

    <li>
      <Link>{currentUser.username}</Link>
    </li>

    <li>
      <Link onClick={logout}>Log Out</Link>
    </li>
  </ul>
);

export default RightNavLoggedIn;
