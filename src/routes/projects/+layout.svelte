<script lang="ts">
  import { base } from '$app/paths';

  let { children } = $props();
</script>

<div class="flex w-full flex-row">
  <a class="link" href="{base}/">⇽ Back</a>
</div>
<div class="prose prose-lg">
  {@render children()}
</div>
