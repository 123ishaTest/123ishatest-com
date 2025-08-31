<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="slice pixelated group flex cursor-pointer flex-col">
  <div class="mt-2 group-hover:mt-4 group-hover:-mb-2">
    {@render children()}
  </div>
</div>

<style>
  .slice {
    border-image: url('/game/sign.png') 7 7 7 7 fill / 28px 28px 28px 28px;
    padding: 14px 14px 14px 14px;
  }
  .slice:hover {
    border-image: url('/game/sign-down.png') 7 7 7 7 fill / 28px 28px 28px 28px;
    padding: 14px 14px 14px 14px;
  }
</style>
