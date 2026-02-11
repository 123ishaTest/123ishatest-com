<script lang="ts">
  import type { Snippet } from 'svelte';
  import Card from '$lib/components/Card.svelte';
  import Subtitle from '$lib/components/Subtitle.svelte';

  interface Props {
    href: string;
    title: string;
    children: Snippet;
  }

  let { href, title, children }: Props = $props();
</script>

<a {href} target="_blank" class="no-underline" rel="external">
  <Card>
    <div class="flex flex-col">
      <Subtitle>{title}</Subtitle>
      <span>{@render children()}</span>
    </div>
  </Card>
</a>
