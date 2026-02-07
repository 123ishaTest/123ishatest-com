<script lang="ts">
  import type { Project } from '$lib/model/Project';
  import Card from '$lib/components/Card.svelte';
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  import Subtitle from '$lib/components/Subtitle.svelte';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<ExternalLink href={project.url} target="_blank">
  <Card>
    <div class="flex flex-col">
      <Subtitle>{project.title}</Subtitle>
      <span class="-mt-2 mb-2 text-sm opacity-60">({project.date})</span>
      <span>{project.description}</span>
    </div>
  </Card>
</ExternalLink>
