<script setup lang="ts">
useMouseGlow()
</script>

<template>
  <div>
    <!-- Background layers -->
    <div class="bg-glow" aria-hidden="true" />
    <div class="bg-grid" aria-hidden="true" />

    <!-- Header -->
    <AppHeader />

    <main>
      <!-- Hero Section -->
      <AppHero />

      <!-- Divider -->
      <div class="container"><hr class="section-divider"></div>

      <!-- Works Section -->
      <AppWorks />

      <!-- Divider -->
      <div class="container"><hr class="section-divider"></div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
