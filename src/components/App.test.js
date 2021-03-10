import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './'

describe('App rendered correctly', () => {
  test('React logo', () => {
    render(<App />)
    const linkElement = screen.getByText(/react logo/i)
    expect(linkElement).toBeInTheDocument()
  })
})
