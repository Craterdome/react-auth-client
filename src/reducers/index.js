import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {routerReducer as router} from 'react-router-redux';

import auth from './auth_reducer';
import messages from './messages_reducer';

const rootReducer = combineReducers({
  auth, form, messages, router
});

export default rootReducer;
