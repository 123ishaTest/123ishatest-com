<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Link from '$lib/components/Link.svelte';
  import Header from '$lib/components/Header.svelte';
  import Title from '$lib/components/Title.svelte';
  import { blogPosts } from '$lib/content/blogPosts';
</script>

<Header>Blog</Header>

{#each blogPosts as blogPost (blogPost.id)}
  <Link href={blogPost.path}>
    <Card>
      <div class="prose text-white md:m-4 md:w-lg">
        <Title>{blogPost.title}</Title>
        <span class="relative -top-4 opacity-40">{blogPost.date}</span>
        <div>{blogPost.description}</div>
      </div>
    </Card>
  </Link>
{/each}
