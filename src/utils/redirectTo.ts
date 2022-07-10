import { useNavigate } from 'react-router-dom'

const RedirectTo = path => {
  const navigate = useNavigate()
  navigate(path)
}

export default RedirectTo
