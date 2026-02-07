<script lang="ts">
  import './layout.css';

  import NavBar from '$lib/components/NavBar.svelte';

  let { children } = $props();
</script>

<div class="blueprint flex min-h-screen flex-col">
  <div class="pointer-events-none flex w-full flex-row justify-end p-4 md:absolute">
    <NavBar></NavBar>
  </div>
  <div class="p-4">
    {@render children()}
  </div>
</div>
