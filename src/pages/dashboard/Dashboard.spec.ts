import { render } from '@testing-library/svelte'

import Dashboard from './Dashboard.svelte'
import { setupI18n } from '../../i18n'

describe('Dashboard', () => {
  let container: HTMLElement

  beforeEach(() => {
    setupI18n()
    container = render(Dashboard).container
  })

  test('the heading is "Dashboard"', () => {
    expect(container.querySelector('h1')?.textContent).toBe(
      'Dashboard'
    )
  })
})
