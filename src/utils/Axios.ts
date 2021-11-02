import axios from 'axios'
import jscookie from 'js-cookie'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
})

function getToken(): string {
  const token = jscookie.get('token')
  if (!token) return ''
  return token
}

instance.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
    }
    return config
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
)

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
}
