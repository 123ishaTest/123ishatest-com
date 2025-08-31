<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="slice pixelated flex flex-col p-4">
  <div class="">
    {@render children()}
  </div>
</div>

<style>
  .slice {
    border-image: url('/game/panel.png') 7 7 7 7 fill / 28px 28px 28px 28px;
    padding: 28px 28px 28px 28px;
  }
</style>
