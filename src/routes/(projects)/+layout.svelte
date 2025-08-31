<script lang="ts">
  import IshaNavbar from '$lib/components/IshaNavbar.svelte';

  let { children } = $props();
</script>

<div class="flex h-screen flex-col">
  <IshaNavbar />

  <div class="flex-1 p-4">
    <div class="mt-8 flex w-full grow flex-col items-center px-4 2xl:px-32">
      <div class="prose">
        {@render children()}
      </div>
    </div>
  </div>
</div>
