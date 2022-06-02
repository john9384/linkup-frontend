import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { authActions } from '.';

function* signup(data) {
  yield delay(500);
  try {
    const res = yield call(apiCall, 'POST', '/users', data.payload);
    yield put(authActions.setUser(res));
  } catch (error) {
    yield put(authActions.setError(error));
  }
}
function* verifyEmail(data) {
  yield delay(500);
  try {
    const res = yield call(apiCall, 'POST', '/users', data.payload);
    yield put(authActions.setUser(res));
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

function* signin(data) {
  yield delay(500);
  try {
    const res = yield call(apiCall, 'POST', '/users', data.payload);
    yield put(authActions.setUser(res));
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.signupUser.type, signup),
    takeLatest(authActions.signupUser.type, signin),
    takeLatest(authActions.signupUser.type, verifyEmail),
  ]);
}
