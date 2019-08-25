import { get } from 'axios';
import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

export function fakeAuthorize (user, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await get('https://randomuser.me/api/?seed=1&page=1&results=10');
      console.log('i am here', {result});
      resolve('test token');
    } catch(error) {
      reject(error);
    }
  });
}

export function* authorize(user, password) {
  try {
    const token = yield call(fakeAuthorize, user, password)
    //  also inform redux that our login was successful
  //  yield put({type: 'LOGIN_SUCCESS'})
    yield put({type: actionTypes.SAVE_TOKEN, token});
    console.log('i am here token', {token});

    
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
  finally {
    if (yield cancelled()) {
      yield put({type: 'LOGIN_CANCELLED'})
    }
  }
}

export function* loginFlow() {
  while (true) {
    const {user, password} = yield take('LOGIN_REQUEST')
    const task = yield call(authorize, user, password)
    const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
    if (action.type === 'LOGOUT') {
      yield cancel(task)
      yield put({type: 'DELETE_TOKEN'})
    }
  }
}


