import React from 'react';
import Nav from './nav/nav';

const App = ({ children }) => (
  <div>
    <Nav />
    { children }
  </div>
);

export default App;
