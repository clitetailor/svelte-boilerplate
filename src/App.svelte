<script lang="typescript">
  import navaid from 'navaid'
  import { onMount, onDestroy } from 'svelte'

  import Home from './pages/index/index.svelte'
  import Dashboard from './pages/dashboard/dashboard.svelte'

  let router = navaid()
  let props: any = {
    component: Home
  }

  router
    .on('/', () => {
      props = {
        component: Home
      }
    })
    .on('/dashboard', () => {
      props = {
        component: Dashboard
      }
    })

  onMount(() => {
    router.listen()
  })

  onDestroy(() => {
    router.unlisten()
  })
</script>

<svelte:component this={props.component} {...props} />
