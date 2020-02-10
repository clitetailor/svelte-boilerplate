import { render } from '@testing-library/svelte'

import Dashboard from './dashboard.svelte'

describe('Dashboard', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = render(Dashboard).container
  })

  test('the heading is "Dashboard"', () => {
    expect(container.querySelector('h1')?.textContent).toBe(
      'Dashboard'
    )
  })
})
