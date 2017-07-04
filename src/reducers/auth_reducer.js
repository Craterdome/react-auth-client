import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../actions/types';

export default (state={}, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {
        authenticated: true,
        user: action.payload
      };
    case UNAUTH_USER:
      return {authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
  }
  return state;
}