import { takeLatest, call, put, delay, all } from 'redux-saga/effects'
import { apiCall } from 'utils/axios'
import { postActions } from '.'

function* createPost(data) {
  yield delay(500)
  try {
    const formData = data.payload
    const res = yield call(apiCall, {
      method: 'POST',
      route: '/posts',
      body: formData,
    })
    yield put(postActions.setPost(res.data))
    yield put(postActions.unShiftPostList([res.data]))
  } catch (error: any) {
    yield put(postActions.setError(error.error))
  }
}

function* fetchPosts() {
  yield delay(500)
  try {
    const res = yield call(apiCall, {
      method: 'GET',
      route: '/posts',
    })
    yield put(postActions.setPostList(res.data))
  } catch (error: any) {
    yield put(postActions.setError(error.error))
  }
}

export default function* postSaga() {
  yield all([takeLatest(postActions.createPost.type, createPost)])
  yield all([takeLatest(postActions.getPostList.type, fetchPosts)])
}
