<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="prose md:prose-2xl flex max-w-prose flex-col items-center">
  <h2 class="h2" id="lets-chat">Let's chat!</h2>

  <p>Whether you have a commission or are just curious, feel free to reach out!</p>

  <div class="mt-8 w-full md:w-2/3">
    <form target="_blank" action="https://formsubmit.co/3f3d52736169abc21b057b98f7232139" method="POST">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">What is your Email address?</span>
          <input name="email" type="email" class="mt-1 block w-full" required />
        </label>
        <label class="block">
          <span class="text-gray-700">What would you like to talk about?</span>
          <textarea name="message" class="mt-1 block w-full" rows="6" required></textarea>
        </label>

        <button class="btn btn-lg" type="submit">Submit</button>

        <input type="hidden" name="_next" value="{base}/submitted" />
      </div>
    </form>
  </div>
</div>
