import { useEffect, useState } from 'react'
import AuthService from 'src/services/AuthService'
import { GetUserPoolConfigResponse } from 'src/services/AuthService.type'

interface useGetUserPoolConfig extends GetUserPoolConfigResponse {
  loading: boolean
}
export function useGetUserPoolConfig(): useGetUserPoolConfig {
  const { getUserPoolConfig } = new AuthService()
  const [response, setResponse] = useState<useGetUserPoolConfig>({
    loading: false,
    data: null,
    error: null,
  })

  const get = async () => {
    const result = await getUserPoolConfig()
    setResponse({ loading: false, data: result.data, error: result.error })
  }

  useEffect(() => {
    setResponse(prev => ({ ...prev, loading: true }))
    get()
  }, [])

  return response
}
