<script setup lang="ts">
const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="hero" id="about">
    <div class="hero-glow" aria-hidden="true" />
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot" />
          Open to collaborate
        </div>
        <h1 class="hero-title">
          <span class="gradient-text">AI-Powered</span><br>Developer
        </h1>
        <p class="hero-subtitle">
          Building the future with Qoder &amp; Trae — crafting intelligent experiences at the intersection of design and code.
        </p>
        <div class="hero-actions">
          <a href="#works" class="btn btn-primary" @click.prevent="scrollTo('#works')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
            浏览作品
          </a>
          <a href="#contact" class="btn btn-secondary" @click.prevent="scrollTo('#contact')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            联系我
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
