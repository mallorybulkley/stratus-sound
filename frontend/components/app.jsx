import React from 'react';
import Nav from './nav/nav';
import Playbar from './playbar/playbar_container';

const App = ({ children }) => (
  <div>
    <Nav />
    <main className="main">
      { children }
    </main>
    <Playbar />
  </div>
);

export default App;
