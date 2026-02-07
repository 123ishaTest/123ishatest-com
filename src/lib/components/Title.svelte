<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<h3 class="title mb-2 text-2xl font-bold">
  {@render children()}
</h3>

<style>
  .title {
    font-family: var(--title-font), serif;
    color: var(--title-color);
  }
</style>
