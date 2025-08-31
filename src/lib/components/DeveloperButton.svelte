<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<div class="card bg-primary-content pointer-events-none w-96 text-black shadow-xl">
  <div class="card-body">
    <div class="flex justify-between">
      <h2 class="text-xl font-bold">Professional Software Developer</h2>
    </div>
    <ul class="mt-2 flex flex-col gap-2 text-xs">
      <li class="opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-success me-2 inline-block size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg
        >
        <span>Full stack websites</span>
      </li>
      <li class="opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-success me-2 inline-block size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg
        >
        <span>Mobile applications</span>
      </li>
    </ul>
    <div class="mt-2">
      <a href={resolve('/(app)/developer')}>
        <button class="btn btn-primary btn-block pointer-events-auto">Portfolio</button>
      </a>
    </div>
  </div>
</div>
