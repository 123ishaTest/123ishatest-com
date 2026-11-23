<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    type: 'info';
    children: Snippet;
  }

  let { type, children }: Props = $props();

  let alertClass = $derived.by(() => {
    switch (type) {
      case 'info':
        return 'bg-blue-400';
    }
  });
</script>

<div class="{alertClass} rounded-sm p-4">
  {@render children()}
</div>
