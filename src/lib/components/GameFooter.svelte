<script lang="ts">
  import GamePanel from '$lib/components/GamePanel.svelte';

  const EMAIL = 'info@123ishatest.com';
</script>

<GamePanel>
  <footer class="">
    <nav>
      <h6 class="footer-title">Contact</h6>
      <a class="text-primary" href="mailto:{EMAIL}">{EMAIL}</a>
      <span class="text-primary">Tel. 06-34704820</span>
      <span class="text-primary">KvK 94042675 The Hague</span>
    </nav>
  </footer>
</GamePanel>
