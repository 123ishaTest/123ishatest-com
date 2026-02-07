<script lang="ts">
  import type { Snippet } from 'svelte';
  import { resolve } from '$app/paths';
  import type { RouteId } from '$app/types';

  interface Props {
    children: Snippet;
    href: RouteId;
    target?: string;
  }

  let { children, href, target }: Props = $props();
</script>

<a href={resolve(href)} {target}>
  {@render children()}
</a>
