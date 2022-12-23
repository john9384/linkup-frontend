import React from 'react'
import { useSelector } from 'react-redux'
import { postListSelector } from 'app/slices/posts/selectors'
import { postActions } from 'app/slices/posts'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const useFetchPostList = ({ pageNumber }) => {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [hasMore, setHasMore] = React.useState(false)
  const dispatch = useDispatch()
  const posts = useSelector(postListSelector)

  React.useEffect(() => {
    setLoading(true)
    let cancel
    axios({
      method: 'GET',
      url: 'http://localhost:4000/api/v1/posts',
      params: { page: pageNumber, limit: 10 },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      cancelToken: new axios.CancelToken(c => (cancel = c)),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('ltk')}`,
      },
    })
      .then(res => {
        if (pageNumber === 0) {
          dispatch(postActions.setPostList(res.data.data))
        } else {
          dispatch(postActions.pushPostList(res.data.data))
        }
        setHasMore(res.data.data.length > 0)
        setLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
        console.log(e)
      })
  }, [dispatch, pageNumber])

  return { loading, posts, error, hasMore }
}

export default useFetchPostList
