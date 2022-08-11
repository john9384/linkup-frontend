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

function* likePost(data) {
  yield delay(100)
  try {
    const { postId } = data.payload
    yield call(apiCall, {
      method: 'POST',
      route: `/posts/like/${postId}`,
    })

    postActions.setLoading(false)
  } catch (error: any) {
    yield put(postActions.setError(error.error))
  }
}

function* unlikePost(data) {
  yield delay(100)
  try {
    const { postId } = data.payload
    yield call(apiCall, {
      method: 'POST',
      route: `/posts/unlike/${postId}`,
    })

    postActions.setLoading(false)
  } catch (error: any) {
    yield put(postActions.setError(error.error))
  }
}

export default function* postSaga() {
  yield all([
    takeLatest(postActions.createPost.type, createPost),
    takeLatest(postActions.getPostList.type, fetchPosts),
    takeLatest(postActions.likePost.type, likePost),
    takeLatest(postActions.unlikePost.type, unlikePost),
  ])
}
