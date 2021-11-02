import AuthStore from '../AuthStore'
import { LoginResponse } from '../../types/auth'
import { toJS } from 'mobx'
describe('Auth Test', () => {
  const store = new AuthStore()
  it('Login', async () => {
    const mockData: LoginResponse = {
      access_token: 'token',
      expires: new Date(),
      user: { _id: '1' },
    }
    const result = await store.login(mockData)
    expect(result).toBe(true)
    expect(toJS(store.user)).toStrictEqual({ _id: '1' })
  })
})
