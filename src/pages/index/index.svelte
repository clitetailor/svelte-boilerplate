<script lang="typescript">
  import Navbar from '../shared/navbar/navbar.svelte'
  import { _ } from 'svelte-i18n'
</script>

<Navbar />

<main>
  <h1>{$_('index.heading')}</h1>
</main>
