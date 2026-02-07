<script lang="ts">
  import { projects } from '$lib/content/projects';
  import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte';
  import Header from '$lib/components/Header.svelte';
  import Title from '$lib/components/Title.svelte';
</script>

<div class="mx-auto flex w-full flex-col items-center md:w-2/3">
  <Header>Projects</Header>

  <div class="mb-4">
    <Title>Click on a project to learn more!</Title>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {#each projects as project (project.id)}
      <ProjectThumbnail {project} />
    {/each}
  </div>
</div>
