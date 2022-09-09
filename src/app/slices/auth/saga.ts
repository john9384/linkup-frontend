import { takeLatest, call, put, delay, all } from 'redux-saga/effects'
import { apiCall } from 'utils/axios'
import { authActions } from '.'

function* signup(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, {
      method: 'POST',
      route: '/auth/signup',
      body: formData,
    })
    yield put(authActions.setUser(res.data))
    navigate('/auth/verify-email')
  } catch (error: any) {
    yield put(authActions.setError(error.error))
  }
}

function* verifyEmail(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, {
      method: 'POST',
      route: '/auth/verify-email',
      body: formData,
    })
    yield put(authActions.setUser(res.data))
    navigate('/auth/login')
  } catch (error: any) {
    yield put(authActions.setError(error.error))
  }
}

function* login(data) {
  yield delay(500)
  try {
    const { formData } = data.payload
    const res = yield call(apiCall, {
      method: 'POST',
      route: '/auth/login',
      body: formData,
    })

    localStorage.setItem('ltk', res.data.token)
    yield put(authActions.setAuth({ isAuthenticated: true }))
  } catch (error: any) {
    yield put(authActions.setError(error.error))
  }
}

function* forgotPassword(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, {
      method: 'POST',
      route: '/auth/forgot-password',
      body: formData,
    })
    yield put(authActions.setUser({ email: res.data.email }))
    navigate('/auth/confirm-reset')
  } catch (error: any) {
    yield put(authActions.setError(error.error))
  }
}

function* confirmResetToken(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    const res = yield call(apiCall, {
      method: 'POST',
      route: '/auth/verify-token',
      body: formData,
    })
    yield put(authActions.setUser(res.data))
    navigate('/auth/reset-password')
  } catch (error: any) {
    yield put(authActions.setError(error.error))
  }
}

function* resetPassword(data) {
  yield delay(500)
  try {
    const { formData, navigate } = data.payload
    yield call(apiCall, {
      method: 'POST',
      route: '/auth/reset-password',
      body: formData,
    })
    yield put(authActions.setLoadingState(false))
    navigate('/auth/login')
  } catch (error: any) {
    yield put(authActions.setError(error.error))
  }
}

function* getCurrentUser() {
  yield delay(500)
  try {
    const res = yield call(apiCall, {
      method: 'GET',
      route: '/auth/user',
    })

    yield put(authActions.setUser(res.data))
  } catch (error: any) {
    yield put(authActions.setError(error.error))
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
  yield all([takeLatest(authActions.getCurrentUser.type, getCurrentUser)])
}
