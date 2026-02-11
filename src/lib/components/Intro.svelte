<script lang="ts">
  import Title from '$lib/components/Title.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<div class="intro flex flex-col border-4 md:flex-row">
  <img
    class="border-b-2 object-cover md:w-32 md:border-r-2"
    src="https://avatars.githubusercontent.com/u/9715314?v=4"
    alt="My face"
  />

  <div class="flex flex-col p-4">
    <Title>{title}</Title>
    <span class="text-xl">
      {@render children()}
    </span>
  </div>
</div>

<style>
  .intro {
    color: var(--text-primary);
    background: var(--surface-transparant);
  }
</style>
