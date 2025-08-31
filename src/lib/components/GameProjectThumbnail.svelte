<script lang="ts">
  import type { ProjectDetail } from '$lib/content/ProjectDetail';
  import { base } from '$app/paths';
  import GameFrame from '$lib/components/GameFrame.svelte';
  import GameSign from '$lib/components/GameSign.svelte';

  interface Props {
    project: ProjectDetail;
  }

  let { project }: Props = $props();

  let isLinkInternal: boolean = $derived(project?.href?.startsWith('/') ?? false);
  let link: string | undefined = $derived(isLinkInternal ? base + project.href : project.href);
  let hrefTarget: string = $derived(isLinkInternal ? '_self' : '_blank');
</script>

<div class="flex flex-col">
  <a href={link} target={hrefTarget}>
    <GameFrame>
      <figure>
        <img
          src="{base}/{project.src}"
          alt={project.src}
          class="bg-accent-content aspect-video w-full {project.imgStyle ?? ''}"
        />
      </figure>
    </GameFrame>
    <div class="-mt-4 px-8">
      <GameSign>
        <div class="flex flex-col items-center justify-center">
          <span>{project.title}</span>
        </div>
      </GameSign>
    </div>
  </a>
</div>
