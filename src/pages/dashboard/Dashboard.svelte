<script lang="typescript">
  import Navbar from '../shared/navbar/Navbar.svelte'
  import { _ } from 'svelte-i18n'
</script>

<Navbar />

<main>
  <h1>{$_('dashboard.heading')}</h1>
</main>
