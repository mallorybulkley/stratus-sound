import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Home from './home/home';
import SessionFormContainer from './session/session_form_container';
import TrackFormContainer from './track/track_form_container';
import TrackContainer from './track/track_container';

const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.username;
  if (!currentUser) {
    replace('/');
  }
};

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.username;
  if (currentUser) {
    replace('/');
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory } onUpdate={ () => window.scrollTo(0, 0) } >
      <Route path="/" component={ App } >
        <IndexRoute component={ Home } />
        <Route path="upload" component={ TrackFormContainer } onEnter={ _ensureLoggedIn } />
        <Route path="tracks/:trackId" component={ TrackContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
