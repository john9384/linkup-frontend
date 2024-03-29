import { takeLatest, call, put, delay, all } from 'redux-saga/effects'
import { apiCall } from 'utils/axios'
import { profileActions } from '.'

function* getUser() {
  yield delay(500)
  try {
    const res = yield call(apiCall, {
      method: 'GET',
      route: '/auth/user',
    })

    yield put(profileActions.setProfile(res.data))
  } catch (error: any) {
    yield put(profileActions.setError(error.error))
  }
}

export default function* profileSaga() {
  yield all([takeLatest(profileActions.getUser.type, getUser)])
}
