import { describe, it } from 'vitest'
import { render, waitFor, screen } from '@testing-library/react'
import {launches} from './mocks/launches'
import App from './App'

describe('App', () => {
  it('should render mission names', async () => {
    render(<App/>)
    await waitFor(() => screen.getByText(launches[0].mission_name))
    launches.forEach(launch => screen.getByText(launch.mission_name))
  })
})
