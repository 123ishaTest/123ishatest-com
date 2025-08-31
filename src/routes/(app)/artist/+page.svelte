<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { artistProjects } from '$lib/content/artist';
  import ArtistProjectThumbnail from '$lib/components/ArtistProjectThumbnail.svelte';
</script>

<div class="flex flex-col items-center">
  <div class="prose md:prose-xl my-8 flex max-w-prose flex-col items-center">
    <h2 class="h2">Welcome</h2>

    <p>
      Hi, I'm Isha! I like to create <span class="text-primary">interactive curiosities</span>. My goal is to make
      people think: &ldquo;<span class="italic">Hmm, I wonder what would happen if I do this...</span>&rdquo;. I combine
      technology with artistic vision to create interactive experiences that you'll remember forever.
    </p>

    <p>Take your time to explore the cool stuff I've made. Click on a project to learn more!</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2">
    {#each artistProjects as project, i (project.title)}
      <ArtistProjectThumbnail {project} direction={i % 2 === 0 ? 'right' : 'left'} />
    {/each}
  </div>

  <div class="flex w-full flex-row justify-center">
    <div class="my-16">
      <ContactForm
        title="Let's make something ridiculous!"
        description="You know you want it :)"
        emailLabel="What is your Email address?"
        messageLabel="What would you like to talk about?"
      />
    </div>
  </div>
</div>
