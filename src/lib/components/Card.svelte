<script lang="ts">
  import type { Snippet } from 'svelte';
  import Title from '$lib/components/Title.svelte';

  interface Props {
    title?: string;
    children: Snippet;
    hoverEffect?: boolean;
  }

  let { title, children, hoverEffect = true }: Props = $props();

  const hoverStyling = $derived(
    hoverEffect ? 'transition-transform duration-300 ease-out hover:scale-105 cursor-pointer' : '',
  );
</script>

<div class="card flex h-full flex-col border-4 border-white p-4 shadow-lg {hoverStyling}">
  {#if title}
    <Title>{title}</Title>
  {/if}
  <div>
    {@render children()}
  </div>
</div>

<style>
  .card {
    color: var(--text-primary);
    /*background: var(--surface);*/
    background: var(--surface-transparant);
  }
</style>
