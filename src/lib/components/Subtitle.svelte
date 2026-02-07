<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<h5 class="subtitle mb-2 text-xl font-bold">
  {@render children()}
</h5>

<style>
  .subtitle {
    font-family: var(--title-font), serif;
    color: var(--title-color);
  }
</style>
