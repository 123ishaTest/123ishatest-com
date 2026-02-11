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
    <div class="flex flex-col md:min-h-96">
      <Subtitle>{project.title}</Subtitle>
      <span class="-mt-2 text-sm opacity-60">({project.date})</span>
      <span class="my-2 border-b-2 opacity-60"></span>
      <img class="h-36 object-contain" src={project.image} alt={project.title} />
      <span class="my-2 border-t-2 opacity-60"></span>

      <span>{project.description}</span>
    </div>
  </Card>
</ExternalLink>
