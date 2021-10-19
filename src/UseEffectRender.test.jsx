import React from 'react'
import { render, screen } from '@testing-library/react'
import UseEffectRender from './useEffectRender'

describe('useEffect rendering', () => {
  it('Should render only ofter async function resolved', async () => {
    render(<UseEffectRender />)
    expect(screen.queryByText(/I am/)).toBeNull()
    expect(await screen.findByText(/I am/)).toBeInTheDocument()
  })
})