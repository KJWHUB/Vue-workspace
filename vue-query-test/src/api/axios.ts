import axios from 'axios'

// const BASE_URL = 'http://localhost:9999'
const BASE_URL = 'http://localhost:9900'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 5,
  headers: { 'X-Custom-Header': 'foobar' }
})

instance.interceptors.request.use(
  (config) => {
    // access token set
    // const token = 'sdafnkjsdaf'
    // config.headers.common['Authorization'] = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
