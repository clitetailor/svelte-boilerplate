<script>
  import { onMount } from 'svelte'

  import { router } from '../../utils/router'

  onMount(() => {
    router.updatePageLinks()
  })
</script>

<nav>
  <a href="/dashboard" data-navigo>Dashboard</a>
</nav>

<main>
  <h1>Hello, World!</h1>
</main>
