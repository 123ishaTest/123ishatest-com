<script lang="ts">
  import IshaNavbar from '$lib/components/IshaNavbar.svelte';
  import IshaFooter from '$lib/components/IshaFooter.svelte';

  let { children } = $props();
</script>

<div class="flex flex-col">
  <IshaNavbar />
  <div class="flex-1 p-4">
    <div class="mt-8 flex w-full grow flex-col items-center px-4 2xl:px-32">
      {@render children()}
    </div>
  </div>

  <IshaFooter />
</div>
