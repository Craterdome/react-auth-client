import axios from 'axios';
import {push} from 'react-router-redux';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, SHOW_MESSAGE} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signInUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then((response) => {
        dispatch({
          type: AUTH_USER,
          payload: {id: response.data.id, email}
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(push('/feature'));
      })
      .catch(() => dispatch(authError('Bad Login Info')));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signOutUser() {
  localStorage.removeItem('user');

  return {type: UNAUTH_USER};
}

export function signUpUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(push('/feature'));
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function showMessage(message) {
  return {
    type: SHOW_MESSAGE,
    payload: message
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: JSON.parse(localStorage.getItem('user')).token }
    })
      .then(response => {
        dispatch(showMessage({
          message: response.data.message
        }));
      });
  }
}