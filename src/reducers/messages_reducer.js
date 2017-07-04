import {SHOW_MESSAGE} from '../actions/types';

export default (state=[], action) => {
  switch(action.type) {
    case SHOW_MESSAGE:
      return [
        ...state,
        action.payload
      ];
  }
  return state;
}