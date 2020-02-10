import { render } from '@testing-library/svelte'

import Home from './index.svelte'

describe('Home', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = render(Home).container
  })
  
  test('the heading is "Hello, World!"', () => {
    expect(container.querySelector('h1')?.textContent).toBe(
      'Hello, World!'
    )
  })
})
