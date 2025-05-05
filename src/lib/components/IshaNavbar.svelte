<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <p class="btn btn-ghost text-xl">
      <a href="{base}/">123IshaTest</a>
    </p>
  </div>
  <div class="navbar-center hidden lg:flex"></div>
  <div class="navbar-end">
    <!--{#if getLocale() === "nl"}-->
    <!--      <button class="text-3xl" on:click={() => setLocale('en')}>🇬🇧</button>-->
    <!--    {:else}-->
    <!--      <button class="text-3xl" on:click={() => setLocale('nl')}>🇳🇱</button>-->
    <!--    {/if}-->
  </div>
</div>
