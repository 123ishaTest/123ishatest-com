<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  let { children } = $props();
</script>

<div class="flex w-full flex-col items-center p-4">
  <Card hoverEffect={false}>
    <div class="prose prose-isha">
      {@render children()}
    </div>
  </Card>
</div>
