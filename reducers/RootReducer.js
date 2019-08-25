
// import { combineReducers } from 'redux';
// import login from './LoginReducer';

// const rootReducer = combineReducers({
//   login,
// });

// export default rootReducer;



import { createStore, combineReducers } from 'redux';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
  loginReducer : loginReducer
});



export default rootReducer;