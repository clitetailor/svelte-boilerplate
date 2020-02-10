<script lang="typescript">
  import navaid from 'navaid'
  import { onMount, onDestroy } from 'svelte'

  let router = navaid()
  let route = location.pathname

  router.on('*', () => {
    route = location.pathname
  })

  onMount(() => {
    router.listen()
  })

  onDestroy(() => {
    router.unlisten()
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
