<script>
  import Card from '$lib/components/Card.svelte';
  import Header from '$lib/components/Header.svelte';
  import { page } from '$app/state';
  import { projects } from '$lib/content/projects.ts';
  import { resolve } from '$app/paths';

  let { children } = $props();

  const blogName = $derived(projects.find((p) => resolve(p.url) === page.url.pathname)?.title ?? 'Blog');
</script>

<div class="flex flex-col items-center space-y-4">
  <Header>{blogName}</Header>

  <Card hoverEffect={false}>
    <div class="prose text-white md:m-4 md:w-xl">
      {@render children()}
    </div>
  </Card>
</div>
