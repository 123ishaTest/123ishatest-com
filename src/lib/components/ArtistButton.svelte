<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { resolve } from '$app/paths';

  let {
    text = 'CREATIVE\nINTERACTIVE\nARTIST',
    particleColor = '#60a5fa',
    background = 'transparent',
    density = 2,
    mouseRadius = 90,
    repulsion = 1000,
    spring = 0.06,
    friction = 0.76,
  } = $props();

  // State
  let wrapEl: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  let width = $state(0);
  let height = $state(0);
  let dpr = $state(1);
  let hovering = $state(false);
  let mouseX = $state(0);
  let mouseY = $state(0);

  type Particle = { x: number; y: number; vx: number; vy: number; hx: number; hy: number };
  let particles = $state<Particle[]>([]);
  let targets = $state<{ x: number; y: number }[]>([]);

  let resizeObs: ResizeObserver;

  function resize() {
    if (!wrapEl || !canvas) return;
    const rect = wrapEl.getBoundingClientRect();
    width = Math.max(200, Math.floor(rect.width));
    height = Math.max(160, Math.floor(rect.height));
    dpr = Math.min(2, window.devicePixelRatio || 1);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    regenerate();
  }

  function regenerate() {
    if (!ctx) return;
    targets = textToPoints(text, width, height, density);
    syncParticlesToTargets();
  }

  function textToPoints(str: string, w: number, h: number, gap: number) {
    const lines = str.split('\n');
    const off = document.createElement('canvas');
    const octx = off.getContext('2d')!;
    off.width = w;
    off.height = h;

    const paddingX = 0.08 * w;
    const paddingY = 0.12 * h;
    const maxTextWidth = w - 2 * paddingX;
    const maxTextHeight = h - 2 * paddingY;

    // Determine font size to fit all lines
    let fontSize = Math.min(maxTextHeight / lines.length, 300);
    const family = '800 200px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial';

    octx.fillStyle = '#000';
    octx.textBaseline = 'middle';

    // Adjust font size to fit widest line
    let maxWidth = 0;
    for (const line of lines) {
      octx.font = family.replace('200px', `${fontSize}px`);
      const metrics = octx.measureText(line);
      if (metrics.width > maxWidth) maxWidth = metrics.width;
    }
    if (maxWidth > maxTextWidth) {
      fontSize *= maxTextWidth / maxWidth;
    }

    octx.clearRect(0, 0, w, h);
    octx.font = family.replace('200px', `${fontSize}px`);

    const lineHeight = fontSize * 1.2;
    const totalTextHeight = lineHeight * lines.length;
    let startY = (h - totalTextHeight) / 2 + lineHeight / 2;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const metrics = octx.measureText(line);
      const x = (w - metrics.width) / 2;
      const y = startY + i * lineHeight;
      octx.fillText(line, x, y);
    }

    const img = octx.getImageData(0, 0, w, h).data;
    const pts: { x: number; y: number }[] = [];
    const step = Math.max(3, Math.floor(gap));

    for (let j = 0; j < h; j += step) {
      for (let i = 0; i < w; i += step) {
        const idx = (j * w + i) * 4;
        if (img[idx + 3] > 128) {
          pts.push({ x: i + 0.5, y: j + 0.5 });
        }
      }
    }
    return pts;
  }

  function syncParticlesToTargets() {
    const count = targets.length;
    if (particles.length < count) {
      for (let i = particles.length; i < count; i++) {
        const t = targets[i];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          hx: t.x,
          hy: t.y,
        });
      }
    } else if (particles.length > count) {
      particles.length = count;
    }
    for (let i = 0; i < particles.length; i++) {
      particles[i].hx = targets[i].x;
      particles[i].hy = targets[i].y;
    }
  }

  function loop() {
    requestAnimationFrame(loop);
    if (!ctx) return;

    const r2 = mouseRadius * mouseRadius;
    for (let p of particles) {
      const ax = (p.hx - p.x) * spring;
      const ay = (p.hy - p.y) * spring;
      p.vx = (p.vx + ax) * friction;
      p.vy = (p.vy + ay) * friction;

      if (hovering) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < r2 && d2 > 0.0001) {
          const inv = 1 / Math.sqrt(d2);
          const force = (1 - d2 / r2) * repulsion * 0.001;
          p.vx += dx * inv * force;
          p.vy += dy * inv * force;
        }
      }
      p.x += p.vx;
      p.y += p.vy;
    }

    ctx.save();
    if (background !== 'transparent') {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
    ctx.fillStyle = particleColor;
    ctx.beginPath();
    for (let p of particles) {
      const r = 1.8;
      ctx.moveTo(p.x + r, p.y);
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.restore();
  }

  function onMove(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }
  function onEnter() {
    hovering = true;
  }
  function onLeave() {
    hovering = false;
  }

  onMount(() => {
    resizeObs = new ResizeObserver(resize);
    resizeObs.observe(wrapEl);
    requestAnimationFrame(loop);
  });

  onDestroy(() => {
    resizeObs?.disconnect();
  });

  // Regenerate when text or density changes
  $effect(() => {
    regenerate();
  });
</script>

<a href={resolve('/artist')} aria-label="Artist">
  <div bind:this={wrapEl} class="relative overflow-hidden bg-transparent md:h-64 md:w-64 lg:h-96 lg:w-96">
    <canvas
      bind:this={canvas}
      class="block h-full w-full"
      onmousemove={onMove}
      onmouseenter={onEnter}
      onmouseleave={onLeave}
    ></canvas>
  </div>
</a>

<style>
  canvas {
    image-rendering: optimizeQuality;
  }
</style>
