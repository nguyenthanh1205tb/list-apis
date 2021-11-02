/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import SignIn from '../SignIn'

describe('Render Correctly', () => {
  render(<SignIn />)
  const btnLogin = screen.getByTestId('test--btn-login')
  it('Button Login correct text content', () => {
    expect(btnLogin.textContent).toBe('Sign in')
  })
})
