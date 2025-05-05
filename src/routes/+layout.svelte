<script lang="ts">
  import '../app.css';
  import IshaNavbar from '$lib/components/IshaNavbar.svelte';
  import IshaFooter from '$lib/components/IshaFooter.svelte';


  let { children } = $props();
</script>

<div class="flex h-screen flex-col">
  <IshaNavbar />

  <div class="flex-1 p-4">
    {@render children()}
  </div>

  <IshaFooter />
</div>
