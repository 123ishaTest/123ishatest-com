<script lang="ts">
  import { type Snippet } from 'svelte';

  interface Props {
    egg: string;
    children: Snippet;
  }

  let { egg, children }: Props = $props();
</script>

<span class="group relative border-b border-dashed focus:outline-none" tabindex="0" role="button">
  <span
    class="tooltip absolute bottom-full mb-1
           min-w-32 border-2 border-white
           px-2 py-1 text-sm opacity-0 transition group-hover:opacity-100 group-focus:opacity-100 md:min-w-64"
  >
    {egg}
  </span>
  {@render children()}
</span>

<style>
  .tooltip {
    background: var(--blue-original);
  }
</style>
