<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="bg-red-400 p-4">
  <span>
    TODO: {@render children()}
  </span>
</div>
