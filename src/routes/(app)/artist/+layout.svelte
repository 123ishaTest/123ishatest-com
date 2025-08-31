<script lang="ts">
  import IshaNavbar from '$lib/components/IshaNavbar.svelte';
  import IshaFooter from '$lib/components/IshaFooter.svelte';

  let { children } = $props();
</script>

<div class="flex h-screen flex-col">
  <IshaNavbar />

  {@render children()}
  <IshaFooter />
</div>

<style>
  * {
    font-family: brandon, sans-serif;
  }
</style>
