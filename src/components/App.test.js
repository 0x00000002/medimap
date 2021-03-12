import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App rendered correctly', () => {
  test('Login page', () => {
    render(<App />)
    const linkElement = screen.getByText(/You must log in to view the page/i)
    expect(linkElement).toBeInTheDocument()
  })
})
