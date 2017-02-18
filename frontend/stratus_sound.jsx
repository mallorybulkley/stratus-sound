import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing //
import { fetchTracks } from './actions/tracks_actions';
import * as TrackApiUtil from './util/track_api_util';

window.fetchTracks = fetchTracks;
window.TrackApiUtil = TrackApiUtil;

// delete the above tests later

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store; // testing

  ReactDOM.render(<Root store={ store } />, document.getElementById('root'));
});
