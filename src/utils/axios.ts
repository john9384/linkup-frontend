import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:4000/api/v1',

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('ltk')}`,
  },
})

export const apiCall = function ({ method, route, body = null, token = null }) {
  const onSuccess = function (response) {
    console.debug('Request Successful!', response)
    return response.data
  }

  const onError = function (error) {
    console.error('Request Failed:', error.config)

    if (error.response) {
      console.error(error.response)
    } else {
      console.error('Error Message:', error.message)
    }

    throw error.response.data

    // return Promise.reject(error.response || error.message)
    // return error.response.data
  }
  if (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  return client({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError)
}
