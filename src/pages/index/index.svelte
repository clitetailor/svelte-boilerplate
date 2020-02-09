<script>
  import { onMount } from 'svelte'

  import { router } from '../../utils/router'

  onMount(() => {
    router.updatePageLinks()
  })
</script>

<a href="/dashboard" data-navigo>Dashboard</a>
