<script>
  import Card from '$lib/components/Card.svelte';
  import Header from '$lib/components/Header.svelte';
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import { blogPosts } from '$lib/content/blogPosts.ts';

  let { children } = $props();

  const blogName = $derived(blogPosts.find((p) => resolve(p.path) === page.url.pathname)?.title ?? 'Blog');
</script>

<svelte:head>
  <title>123IshaTest | {blogName}</title>
</svelte:head>

<div class="flex flex-col items-center space-y-4">
  <Header>{blogName}</Header>

  <Card hoverEffect={false}>
    <div class="grid grid-cols-1">
      <div class="prose prose-isha md:m-4 md:w-2xl">
        {@render children()}
      </div>
    </div>
  </Card>
</div>
