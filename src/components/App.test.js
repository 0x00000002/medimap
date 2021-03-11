import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App rendered correctly', () => {
  test('Login page', () => {
    render(<App />)
    const linkElement = screen.getByText(/please login/i)
    expect(linkElement).toBeInTheDocument()
  })
})
