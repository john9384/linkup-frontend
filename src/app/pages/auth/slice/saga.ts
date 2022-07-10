import { takeLatest, call, put, delay, all } from 'redux-saga/effects'
import { apiCall } from 'utils/axios'
import { authActions } from '.'

function* signup(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, 'POST', '/auth/signup', formData)
    yield put(authActions.setUser(res.data))
    navigate('/auth/verify-email')
  } catch (error: any) {
    yield put(authActions.setError(error.data.data))
  }
}

function* verifyEmail(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, 'POST', '/auth/verify-email', formData)
    yield put(authActions.setUser(res.data))
    navigate('/auth/login')
  } catch (error: any) {
    yield put(authActions.setError(error.data.data))
  }
}

function* login(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, 'POST', '/auth/login', formData)
    yield put(authActions.setUser({ email: res.data.email }))
    yield put(authActions.setAuth(res.data.token))
    navigate('/')
  } catch (error: any) {
    yield put(authActions.setError(error.data.data))
  }
}

function* forgotPassword(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, 'POST', '/auth/forgot-password', formData)
    yield put(authActions.setUser({ email: res.data.email }))
    navigate('/auth/confirm-reset')
  } catch (error: any) {
    yield put(authActions.setError(error.data.data))
  }
}

function* confirmResetToken(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, 'POST', '/auth/verify-token', formData)
    yield put(authActions.setUser(res.data))
    navigate('/auth/reset-password')
  } catch (error: any) {
    yield put(authActions.setError(error.data.data))
  }
}

function* resetPassword(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    yield call(apiCall, 'POST', '/auth/reset-password', formData)
    navigate('/auth/login')
  } catch (error: any) {
    yield put(authActions.setError(error.data.data))
  }
}

export default function* authSaga() {
  yield all([takeLatest(authActions.signupUser.type, signup)])
  yield all([takeLatest(authActions.verifyUserEmail.type, verifyEmail)])
  yield all([takeLatest(authActions.loginUser.type, login)])
  yield all([takeLatest(authActions.forgotUserPassword.type, forgotPassword)])
  yield all([
    takeLatest(authActions.verifyPasswordResetToken.type, confirmResetToken),
  ])
  yield all([takeLatest(authActions.resetUserPassword.type, resetPassword)])
}
