<script lang="typescript">
  import page from 'page'
  import { onMount, onDestroy } from 'svelte'

  import Home from './pages/index/index.svelte'
  import Dashboard from './pages/dashboard/dashboard.svelte'
  import { setupI18n } from './i18n/index'

  setupI18n()

  let props: any = {
    component: Home
  }

  page('/', () => {
    props = {
      component: Home
    }
  })

  page('/dashboard', () => {
    props = {
      component: Dashboard
    }
  })

  onMount(() => {
    page.start()
  })
</script>

<svelte:component this={props.component} {...props} />
