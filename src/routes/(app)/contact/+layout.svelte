<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Header from '$lib/components/Header.svelte';

  let { children } = $props();
</script>

<div class="flex flex-col items-center">
  <Header>Contact</Header>

  <Card hoverEffect={false}>
    <div class="prose text-white md:m-4">
      {@render children()}
    </div>
  </Card>
</div>
