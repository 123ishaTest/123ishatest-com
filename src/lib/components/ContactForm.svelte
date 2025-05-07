<script lang="ts">
  import { base } from '$app/paths';

  interface Props {
    title?: string;
    description?: string;
    emailLabel?: string;
    messageLabel?: string;
  }

  let { title, description, emailLabel = 'Email Address', messageLabel = 'Message' }: Props = $props();
</script>

<div class="prose md:prose-xl flex max-w-prose flex-col items-center">
  {#if title}
    <h2 class="h2" id="lets-chat">{title}</h2>
  {/if}

  {#if description}
    <p class="font-bold">{description}</p>
  {/if}

  <div class="w-full md:w-2/3">
    <form target="_blank" action="https://formsubmit.co/3f3d52736169abc21b057b98f7232139" method="POST">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">{emailLabel}</span>
          <input name="email" type="email" class="mt-1 block w-full" required />
        </label>
        <label class="block">
          <span class="text-gray-700">{messageLabel}</span>
          <textarea name="message" class="mt-1 block w-full" rows="6" required></textarea>
        </label>

        <button class="btn btn-lg" type="submit">Submit</button>

        <input type="hidden" name="_next" value="{base}/submitted" />
      </div>
    </form>
  </div>
</div>
