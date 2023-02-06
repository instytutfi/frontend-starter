import React from 'react'

import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders without errors', async () => {
    render(<App />)
  })
})
