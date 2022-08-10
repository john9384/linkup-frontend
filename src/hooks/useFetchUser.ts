import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userSelector } from '../app/slices/auth/selectors'
import { authActions } from '../app/slices/auth'

const useFetchUser = () => {
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState({})
  const dispatch = useDispatch()
  const fetchedUser = useSelector(userSelector)

  React.useEffect(() => {
    setLoading(true)
    const fetchUser = () => {
      if (fetchedUser === undefined) {
        dispatch(authActions.getCurrentUser())
      }
      setUser(fetchedUser)
      setLoading(false)
    }

    fetchUser()
  }, [dispatch, fetchedUser, user])

  return { loading, user }
}

export default useFetchUser
