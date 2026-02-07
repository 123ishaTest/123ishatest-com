<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<h3 class="header mb-6 text-center text-4xl md:text-5xl">
  {@render children()}
</h3>

<style>
  .header {
    font-family: var(--header-font), serif;
    color: var(--header-color);
  }
</style>
