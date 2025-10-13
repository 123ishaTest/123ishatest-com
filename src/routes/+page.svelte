<script lang="ts">
  import GameButton from '$lib/components/GameButton.svelte';
  import DeveloperButton from '$lib/components/DeveloperButton.svelte';
  import ArtistButton from '$lib/components/ArtistButton.svelte';
</script>

<div id="background">
  <div class="title flex flex-col items-center space-y-4 overflow-hidden p-4 lg:hidden">
    <div class="flex flex-col items-center">
      <span class="text-2xl font-bold text-white">Hi, I'm Isha!</span>
      <span class="text-2xl font-bold text-white">Select the role you are looking for</span>
    </div>
    <DeveloperButton />
    <ArtistButton />
    <GameButton />
  </div>

  <div class="hidden min-h-screen flex-col items-center justify-center lg:flex">
    <div class="relative h-full w-full">
      <div class="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform">
        <div class="flex flex-col items-center">
          <span class="text-3xl font-bold text-white">Hi, I'm Isha!</span>
          <span class="text-3xl font-bold text-white">Select the role you are looking for</span>
        </div>
      </div>

      <div
        class="pointer-events-none absolute -translate-x-1/2 -translate-y-full transform cursor-pointer"
        style="top: calc(50% - 12rem); left: 50%;"
      >
        <DeveloperButton />
      </div>

      <div
        class="absolute -translate-x-full -translate-y-1/2 transform cursor-pointer"
        style="top: calc(60% + 8rem); left: calc(50% - 20rem);"
      >
        <GameButton />
      </div>

      <div
        class="absolute -translate-y-1/2 transform cursor-pointer"
        style="top: calc(60% + 8rem); left: calc(50% + 16rem);"
      >
        <ArtistButton />
      </div>
    </div>
  </div>
</div>

<style global>
  #background {
    background-color: rgba(0, 102, 204, 0.72);
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size:
      100px 100px,
      100px 100px,
      20px 20px,
      20px 20px;
    background-position:
      -2px -2px,
      -2px -2px,
      -1px -1px,
      -1px -1px;
  }
</style>
