import axios from 'axios'
import { KeyUnknown } from './@types'
import https from 'https'
import { AxiosDigest } from './AxiosDigest'

interface RequestData {
  url: string
  body?: KeyUnknown
  query?: string
}
const httpsAgent = new https.Agent({ keepAlive: true })
const httpAgent = new https.Agent({ keepAlive: true })

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI,
  httpAgent,
  httpsAgent,
  headers: {
    Accept: '*/*',
  },
})

const DigestAuth = new AxiosDigest('admin', 'Viact123', instance)
const Request = {
  get: ({ url }: RequestData) => DigestAuth.get(url),
}

export { DigestAuth, Request }
