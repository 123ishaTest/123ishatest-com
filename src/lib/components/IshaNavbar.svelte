<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  let isLink = (path: string): string => {
    return page?.url?.pathname?.includes(path) ? 'link' : '';
  };
</script>

<div class="navbar">
  <div class="navbar-start">
    <p class="btn btn-ghost text-xl">
      <a href={resolve('/')}>123IshaTest</a>
    </p>
  </div>
  <div class="navbar-center hidden space-x-8 lg:flex">
    <a href={resolve('/developer')} class="{isLink('developer')} text-xl"> Software Developer </a>
    <a href={resolve('/game')} class="{isLink('game')} text-xl"> Game Designer </a>
    <a href={resolve('/artist')} class="{isLink('artist')} text-xl"> Interactive Artist </a>
  </div>
  <div class="navbar-end"></div>
</div>
