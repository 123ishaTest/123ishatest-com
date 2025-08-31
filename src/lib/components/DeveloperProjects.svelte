<script lang="ts">
  import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte';
  import { developerProjects } from '$lib/content/developer';
</script>

<div class="xs:grid-cols-1 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
  {#each developerProjects as project (project.title)}
    <ProjectThumbnail {project} />
  {/each}
</div>
