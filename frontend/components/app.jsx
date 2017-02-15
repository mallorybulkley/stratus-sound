import React from 'react';
import Nav from './nav/nav';

const App = ({ children }) => (
  <div>
    <Nav />
    <main className="main">
      { children }
    </main>
  </div>
);

export default App;
