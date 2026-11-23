<script lang="ts">
  import type { Asset } from '$app/types';

  interface Props {
    src: Asset;
    alt: string;
    caption: string;
  }

  let { src, alt, caption }: Props = $props();
</script>

<figure class="flex flex-col items-center">
  <img {src} {alt} />
  {#if caption}
    <figcaption class="text-white italic">{caption}</figcaption>
  {/if}
</figure>
