<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Card from '$lib/components/Card.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Link from '$lib/components/Link.svelte';
</script>

<div class="overflow-y-auto p-4">
  <div class="mx-auto flex w-full flex-col items-center md:w-2/3 xl:w-1/2">
    <Header>Creating Interactive Curiosities</Header>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="col-span-1 md:col-span-2">
        <Intro title="Hello!">
          I am Isha, a software developer, game designer and interactive artist based in The Netherlands. On this
          personal website you can find information about what I'm working on, as well as some excellent reasons to hire
          me!
        </Intro>
      </div>

      <Link href="/(app)/contact">
        <Card title="Software Developer">
          I work as a freelance software developer on a wide range of projects from full-stack web development to
          robotics. My specialty is the role of the <span class="italic">Toolsmith</span>: building tools to empower
          other people to excel in their job!
        </Card>
      </Link>

      <Link href="/(app)/blog">
        <Card title="Blog">
          Here I write about game design, software (over)engineering, puzzle hunts, worldbuilding, glue guns or whatever
          else has gotten me distracted this month!
        </Card>
      </Link>

      <!-- TODO: Add link to filter-->
      <Link href="/(app)/projects">
        <Card title="Game Development">
          My custom game engine <a class="link" target="_blank" href="https://ludiek.123ishatest.com">Ludiek</a> is
          currently under heavy development. Soon I will release the first game in my upcoming ludiverse:
          <a class="link" href="https://lands-unknown.com" target="_blank">Lands Unknown</a>.
        </Card>
      </Link>

      <!-- TODO: Add link to filter-->
      <Link href="/(app)/projects">
        <Card title="Puzzles">
          Designing puzzles for specific people or events is my passion. Creating a trail of clues which can be
          carefully unraveled is so fun and challenging and makes puzzles my favourite art form!
        </Card>
      </Link>

      <!-- TODO: Add link to filter-->
      <Link href="/(app)/projects">
        <Card title="Interactive Art">
          In the free time that I have left, I create interactive art installations. The goal is to make people think: <span
            class="italic">“Hmm, I wonder what would happen if I do this...”</span
          >. I combine technology with artistic vision to create interactive curiosities that you'll remember!
        </Card>
      </Link>

      <Link href="/(app)/contact">
        <Card title="Contact">
          If you want to hire me as a software developer, complain that my puzzles are too hard or simply talk about
          anything here that piqued your interest, don't hesitate to contact me by sending an email to <a
            class="italic"
            href="mailto:info@123ishatest.com">info@123ishatest.com</a
          >
        </Card>
      </Link>
    </div>
  </div>
</div>
