import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useJwt } from 'react-jwt'

const useFetchCurrentUser = () => {
  const token = localStorage.getItem('ltk')
  const { isExpired } = useJwt(token as string)
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState<any>({})
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    setLoading(true)
    const fetchUser = () => {
      axios
        .get('http://localhost:4000/api/v1/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          return res.data
        })
        .then(payload => {
          setUser(payload.data)
          setIsAuthenticated(true)
        })

      setLoading(false)
    }

    if (!isExpired) {
      fetchUser()
    }
  }, [dispatch, token, isAuthenticated, isExpired])

  return { loading, user, isAuthenticated }
}

export default useFetchCurrentUser
