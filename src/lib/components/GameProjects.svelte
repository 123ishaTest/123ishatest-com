<script lang="ts">
  import { gameProjects } from '$lib/content/game';
  import GameProjectThumbnail from '$lib/components/GameProjectThumbnail.svelte';
</script>

<div class="xs:grid-cols-1 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
  {#each gameProjects as project (project.title)}
    <GameProjectThumbnail {project} />
  {/each}
</div>
