import actionTypes from '../actions/actionTypes';
import { LOGGED_IN, LOGGED_OUT, LOGIN_CANCELLED, LOGIN_ERROR } from '../Status';

const initialState = {
    token: 'hh',
    status: 'logged out',
  }
  const loginReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      newState = {...state, status: LOGGED_IN};
      return newState;
    case actionTypes.SAVE_TOKEN:
      newState = {...state, token: 'yee'};
      newState.token = 'yee';
      console.log('i reducer')
      return newState;
    case actionTypes.DELETE_TOKEN:
      newState = {...state, token: null};
      newState.token = null;
      return newState;
    case actionTypes.LOGOUT:
      newState = {...state, status: LOGGED_OUT};
      return newState;
    case actionTypes.LOGIN_ERROR:
      newState = {...state, status: LOGIN_ERROR};
      return newState;
    case actionTypes.LOGIN_CANCELLED:
      newState = {...state, status: LOGIN_CANCELLED};
      return newState;
    default:
      return state;
  }
}

export default loginReducer;

