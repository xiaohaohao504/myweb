<script setup lang="ts">
const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo" @click.prevent="scrollToTop">
        <span class="logo-icon">C</span>
        CodeWithAI
      </a>
      <nav class="nav">
        <a href="#about" @click.prevent="scrollTo('#about')">关于</a>
        <a href="#works" @click.prevent="scrollTo('#works')">作品</a>
        <a href="#contact" @click.prevent="scrollTo('#contact')">联系我</a>
      </nav>
    </div>
  </header>
</template>
