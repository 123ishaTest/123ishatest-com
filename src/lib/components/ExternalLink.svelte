<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    href: string;
    target?: string;
  }

  let { children, href, target = '_blank' }: Props = $props();
</script>

<a {href} {target}>
  {@render children()}
</a>
