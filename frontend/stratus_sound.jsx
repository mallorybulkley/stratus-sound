import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store; // for testing - delete later!
  ReactDOM.render(
    <Root store={ store } />,
    document.getElementById('root')
  );
});
