<script lang="ts">
  let { children } = $props();
</script>

<div class="flex flex-col items-center space-y-4">
  {@render children()}
</div>
