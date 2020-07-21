<script lang="typescript">
  import page from 'page'
  import { onMount, onDestroy } from 'svelte'

  let route = location.pathname

  page('*', () => {
    route = location.pathname
  })
</script>

<style lang="scss">
  a {
    color: black;
  }

  a.active {
    color: blue;
  }
</style>

<nav>
  <a href="/" class:active={route === '/'}>Home</a>
  <a href="/dashboard" class:active={route === '/dashboard'}>
    Dashboard
  </a>
</nav>
