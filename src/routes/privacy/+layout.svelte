<script lang="ts">
  let { children } = $props();
</script>

<div class="flex flex-col items-center w-full p-4">
  <div class="prose">

    {@render children()}
  </div>
</div>