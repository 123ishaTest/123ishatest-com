<script lang="ts">
  import type { ProjectDetail } from '$lib/content/ProjectDetail';
  import { base } from '$app/paths';

  interface Props {
    project: ProjectDetail;
    direction: 'left' | 'right';
  }

  let { project, direction }: Props = $props();

  let isLinkInternal: boolean = $derived(project?.href?.startsWith('/') ?? false);
  let link: string | undefined = $derived(isLinkInternal ? base + project.href : project.href);
  let hrefTarget: string = $derived(isLinkInternal ? '_self' : '_blank');

  let padding = $derived(direction === 'left' ? 'left-5' : 'right-5');
</script>

<a href={project.href ? link : null} target={hrefTarget} class="group">
  <div class="relative">
    <img
      src="{base}/{project.src}"
      alt={project.src}
      class="bg-accent-content aspect-video w-full not-group-hover:brightness-75 {project.imgStyle ?? ''}"
    />
    <div class="absolute top-0 p-16 {padding}">
      <div class="flex flex-col">
        <span class="text-5xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{project.title}</span>
        <!-- eslint-disable svelte/no-at-html-tags -->
        <span class="w-96 text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{@html project.caption}</span
        >
      </div>
    </div>
  </div>
  <div></div>
</a>
