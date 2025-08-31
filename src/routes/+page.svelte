<script lang="ts">
  import GameButton from '$lib/components/GameButton.svelte';
  import DeveloperButton from '$lib/components/DeveloperButton.svelte';
  import ArtistButton from '$lib/components/ArtistButton.svelte';
</script>

<div class="title flex flex-col items-center space-y-8 overflow-hidden p-4 md:hidden">
  <h2 class="mt-12 text-2xl font-bold">I am looking for a...</h2>
  <DeveloperButton />
  <ArtistButton />
  <GameButton />
</div>

<div class="hidden min-h-screen flex-col items-center justify-center md:flex">
  <div class="relative h-full w-full">
    <div class="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform">
      <p class="text-3xl font-bold">I am looking for a...</p>
    </div>

    <div
      class="pointer-events-none absolute -translate-x-1/2 -translate-y-full transform cursor-pointer"
      style="top: calc(50% - 12rem); left: 50%;"
    >
      <DeveloperButton />
    </div>

    <div
      class="absolute -translate-x-full -translate-y-1/2 transform cursor-pointer"
      style="top: calc(50% + 16rem); left: calc(50% - 20rem);"
    >
      <GameButton />
    </div>

    <div
      class="absolute -translate-y-1/2 transform cursor-pointer"
      style="top: calc(50% + 16rem); left: calc(50% + 16rem);"
    >
      <ArtistButton />
    </div>
  </div>
</div>
