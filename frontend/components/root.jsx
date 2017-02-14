import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';

const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.username;
  if (!currentUser) {
    replace('/login');
  }
}

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.username;
  if (currentUser) {
    replace('/');
  }
}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
