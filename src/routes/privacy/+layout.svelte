<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  let { children } = $props();
</script>

<div class="flex w-full flex-col items-center p-4">
  <Card>
    <div class="prose text-white">
      {@render children()}
    </div>
  </Card>
</div>
