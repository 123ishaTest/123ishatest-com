<script lang="ts">
  import { resolve } from '$app/paths';
  import GamePanel from '$lib/components/GamePanel.svelte';
  import MedievalButton from '$lib/components/MedievalButton.svelte';
</script>

<a href={resolve('/game')}>
  <GamePanel>
    <div class="w-64">
      <div class="prose prose-sm flex flex-col items-center">
        <h2 class="h2">Innovative Game Designer</h2>

        <ul>
          <li>Over 10 games released!</li>
          <li>Experienced with all major game engines</li>
        </ul>

        <MedievalButton>Portfolio</MedievalButton>
      </div>
    </div>
  </GamePanel>
</a>

<style>
  * {
    font-family: beachday, sans-serif;
  }
</style>
