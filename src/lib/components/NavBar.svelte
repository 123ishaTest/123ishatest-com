<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<div class="pointer-events-auto flex flex-col">
  <a href={resolve('/')}>123IshaTest</a>
  <br />
  <a href={resolve('/work')}>Work</a>
  <a href={resolve('/projects')}>Projects</a>
  <a href={resolve('/blog')}>Blog</a>
  <a href={resolve('/about')}>About</a>
</div>

<style>
  a {
    @apply hover:underline;
  }
</style>
