<script lang="typescript">
  import { onMount } from 'svelte'

  import Home from './pages/index/index.svelte'
  import Dashboard from './pages/dashboard/dashboard.svelte'

  import { router } from './utils/router'

  let props: any = {
    component: Home
  }

  router
    .on(() => {
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
    router.resolve()
  })
</script>

<svelte:component this={props.component} {...props} />
