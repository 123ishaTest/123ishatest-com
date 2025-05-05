<script lang="ts">
  import type { ProjectDetail } from '$lib/content/ProjectDetail';
  import { base } from '$app/paths';

  interface Props {
    project: ProjectDetail;
  }

  let { project }: Props = $props();

  let isLinkInternal: boolean = $derived(project?.href?.startsWith('/') ?? false);
  let link: string | undefined = $derived(isLinkInternal ? base + project.href : project.href);
  let hrefTarget: string = $derived(isLinkInternal ? '_self' : '_blank');
  let linkStyling: string = $derived(isLinkInternal ? 'btn-primary' : 'btn-accent');
</script>

<div class="card card-border bg-base-100 shadow-sm">
  <figure>
    <img src="{base}/{project.src}" alt={project.src} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{project.title}</h2>

    <!-- eslint-disable svelte/no-at-html-tags -->
    <p>{@html project.caption}</p>

    <div class="card-actions justify-end">
      {#if project.linkLabel}
        <a href={link} target={hrefTarget}>
          <button class="btn {linkStyling}">{project.linkLabel}</button>
        </a>
      {/if}
    </div>
  </div>
</div>
