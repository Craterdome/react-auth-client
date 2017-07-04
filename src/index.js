import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppContainer } from 'react-hot-loader';

import '../style/style.scss';

import App from './components/app';
import {AUTH_USER} from './actions/types';
import reducers from './reducers';

const history = createHistory();
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    reduxThunk,
    routerMiddleware(history),
  )));

// authenticate initial users
const user = localStorage.getItem('user');
if (user) {
  try {
    store.dispatch({type: AUTH_USER, payload: JSON.parse(user)});
  } catch(err) {
    console.log(err);
    localStorage.removeItem('user');
  }
}

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </AppContainer>, document.getElementById("container"));
