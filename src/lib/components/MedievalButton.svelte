<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<button class="slice w-full cursor-pointer">
  {@render children()}
</button>

<style>
  .slice {
    border-image: url('/game/button-up.png') 7 7 7 7 fill / 7px 7px 7px 7px;
    padding: 7px 7px 7px 7px;
  }

  .slice:hover {
    border-image: url('/game/button-down.png') 7 7 7 7 fill / 7px 7px 7px 7px;
    padding: 7px 7px 7px 7px;
  }
</style>
