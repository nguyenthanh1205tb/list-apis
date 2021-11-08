import axios, { AxiosError } from 'axios'
import jscookie from 'js-cookie'
import { ServiceError } from 'src/services'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI,
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

function handleError(err: AxiosError): ServiceError | AxiosError {
  const { response } = err
  if (!response) return err
  return {
    message: response.data.message,
    statusCode: response.data.statusCode,
    statusText: response.statusText,
    timestamp: response.data.timestamp,
  }
}

instance.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
    }
    return config
  },
  error => Promise.reject(handleError(error)),
)

instance.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(handleError(error)),
)

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
}
