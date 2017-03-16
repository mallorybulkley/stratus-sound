import React from 'react';

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
      <a onClick={() => openModal("login")}>Upload</a>
    </li>
  </ul>
);

export default RightNavLoggedOut;
