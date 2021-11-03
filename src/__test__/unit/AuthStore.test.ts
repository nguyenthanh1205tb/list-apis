import { AuthStore } from '../../stores/AuthStore'
import { LoginResponse } from '../../types/auth'
import { toJS } from 'mobx'
import { waitFor } from '@testing-library/dom'

describe('Auth Test', () => {
  const store = new AuthStore()
  it('Login', async () => {
    const mockData: LoginResponse = {
      access_token: 'token',
      expires: new Date(),
      user: { _id: '1' },
    }
    await waitFor(() => store.login(mockData))
    expect(toJS(store.user)).toStrictEqual({ _id: '1' })
  })
})
