<script lang="ts">
  import IshaNavbar from '$lib/components/IshaNavbar.svelte';

  let { children } = $props();
</script>

<div class="custom-cursor background flex flex-col">
  <IshaNavbar />

  <div class="flex-1 p-4">
    <div class="mt-8 flex w-full grow flex-col items-center px-4 2xl:px-32">
      {@render children()}
    </div>
  </div>
</div>

<style>
  .background {
    background-image: url('sky-background.png');
  }
  .custom-cursor {
    cursor: url('game/cursor.png'), pointer;
  }

  * {
    font-family: beachday;
  }
</style>
