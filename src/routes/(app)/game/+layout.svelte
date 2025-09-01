<script lang="ts">
  import IshaNavbar from '$lib/components/IshaNavbar.svelte';

  let { children } = $props();
</script>

<div class="custom-cursor background pixelated flex flex-col">
  <IshaNavbar />

  <div class="mt-8 flex w-full grow flex-col items-center px-4 2xl:px-32">
    {@render children()}
  </div>
</div>

<style>
  .background {
    background-image: url('/sky-background.png');
    background-attachment: fixed;
    background-size: 100% 100%;
  }

  .custom-cursor {
    cursor: url('/game/cursor.png'), pointer;
  }

  * {
    font-family: beachday, serif;
  }
</style>
