import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
  <ul className="left">
    <li className="logo">
      <Link to="/">Stratus Sound</Link>
    </li>

    <li>
      <Link to="/">Stream</Link>
    </li>
  </ul>
);

export default LeftNav;
