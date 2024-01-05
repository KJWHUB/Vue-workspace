import axios from 'axios'

// const BASE_URL = 'http://localhost:9999'
const BASE_URL = 'http://localhost:9900'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 5,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default instance
