<script setup lang="ts">
interface Tag {
  text: string
  cls?: string
}

interface Work {
  id: string
  thumb: string
  title: string
  desc: string
  tags: Tag[]
}

defineProps<{ work: Work }>()
</script>

<template>
  <article class="work-card" v-reveal>
    <div class="work-card-thumb">
      <div class="work-card-thumb-inner" :class="work.thumb">
        <!-- AI Code Reviewer -->
        <svg v-if="work.id === 'reviewer'" class="thumb-svg" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="64" height="44" rx="6" stroke="rgba(167,139,250,0.5)" stroke-width="1.5"/>
          <rect x="16" y="22" width="20" height="3" rx="1.5" fill="rgba(167,139,250,0.4)"/>
          <rect x="16" y="29" width="32" height="3" rx="1.5" fill="rgba(167,139,250,0.25)"/>
          <rect x="16" y="36" width="26" height="3" rx="1.5" fill="rgba(167,139,250,0.25)"/>
          <circle cx="56" cy="36" r="8" stroke="rgba(110,116,248,0.4)" stroke-width="1.5"/>
          <rect x="24" y="60" width="32" height="8" rx="4" fill="rgba(122,62,240,0.2)"/>
        </svg>
        <!-- Smart Dashboard -->
        <svg v-else-if="work.id === 'dashboard'" class="thumb-svg" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="26" height="52" rx="5" stroke="rgba(110,116,248,0.5)" stroke-width="1.5"/>
          <rect x="16" y="24" width="14" height="3" rx="1.5" fill="rgba(110,116,248,0.4)"/>
          <rect x="16" y="31" width="10" height="3" rx="1.5" fill="rgba(110,116,248,0.25)"/>
          <circle cx="23" cy="54" r="5" stroke="rgba(110,116,248,0.3)" stroke-width="1.5"/>
          <rect x="44" y="14" width="26" height="52" rx="5" stroke="rgba(103,232,249,0.5)" stroke-width="1.5"/>
          <rect x="50" y="24" width="14" height="3" rx="1.5" fill="rgba(103,232,249,0.4)"/>
          <rect x="50" y="31" width="10" height="3" rx="1.5" fill="rgba(103,232,249,0.25)"/>
          <rect x="50" y="38" width="12" height="3" rx="1.5" fill="rgba(103,232,249,0.25)"/>
          <path d="M36 36H44" stroke="rgba(122,62,240,0.4)" stroke-width="1.5" stroke-dasharray="2 2"/>
        </svg>
        <!-- Design System AI -->
        <svg v-else class="thumb-svg" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="36" r="20" stroke="rgba(249,168,212,0.5)" stroke-width="1.5"/>
          <circle cx="40" cy="36" r="8" stroke="rgba(167,139,250,0.4)" stroke-width="1.5"/>
          <path d="M40 16V12M40 60V56M60 36H64M16 36H20" stroke="rgba(249,168,212,0.3)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M54 22L57 19M23 53L26 50M54 50L57 53M23 19L26 22" stroke="rgba(167,139,250,0.25)" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="28" y="64" width="24" height="4" rx="2" fill="rgba(168,85,247,0.2)"/>
        </svg>
      </div>
    </div>
    <div class="work-card-body">
      <h3 class="work-card-title">{{ work.title }}</h3>
      <p class="work-card-desc">{{ work.desc }}</p>
      <div class="tag-list">
        <span v-for="tag in work.tags" :key="tag.text" class="tag" :class="tag.cls">{{ tag.text }}</span>
      </div>
    </div>
  </article>
</template>
