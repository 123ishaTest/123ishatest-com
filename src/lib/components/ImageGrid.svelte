<script lang="ts">
  import { projects } from '$lib/content/projects';
  import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte';
</script>

<div class="xs:grid-cols-1 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
  {#each projects as project (project.title)}
    <ProjectThumbnail {project} />
  {/each}
</div>
