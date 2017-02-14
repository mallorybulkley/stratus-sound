import React from 'react';
import Greeting from './greeting/greeting';

const App = ({ children }) => (
  <div>
    <h1>Stratus Sound</h1>
    <Greeting />
    { children }
  </div>
);

export default App;
