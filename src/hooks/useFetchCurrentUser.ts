import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { profileActions } from '../app/slices/profileSlice'
import { userProfileSelector } from '../app/slices/profileSlice/selectors'

const useFetchCurrentUser = () => {
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState({})
  const dispatch = useDispatch()
  const currentUser = useSelector(userProfileSelector)

  React.useEffect(() => {
    setLoading(true)
    const fetchUser = () => {
      if (!currentUser) {
        dispatch(profileActions.getCurrentUser())
      }
      setUser(currentUser)
      setLoading(false)
    }

    fetchUser()
  }, [dispatch, currentUser])

  return { loading, user }
}

export default useFetchCurrentUser
