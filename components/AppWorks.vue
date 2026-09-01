<script setup lang="ts">
interface WorkItem {
  id: string
  thumb: string
  title: string
  desc: string
  tags: { text: string; cls?: string }[]
}

const works: WorkItem[] = [
  {
    id: 'reviewer',
    thumb: 'thumb-1',
    title: 'AI Code Reviewer',
    desc: '智能代码审查工具，基于大语言模型的自动化代码质量检查。',
    tags: [{ text: 'Python' }, { text: 'LangChain', cls: 'tag-blue' }, { text: 'GPT-4', cls: 'tag-cyan' }]
  },
  {
    id: 'dashboard',
    thumb: 'thumb-2',
    title: 'Smart Dashboard',
    desc: '实时数据可视化面板，支持自然语言查询与智能图表生成。',
    tags: [{ text: 'React', cls: 'tag-blue' }, { text: 'TypeScript' }, { text: 'D3.js', cls: 'tag-cyan' }]
  },
  {
    id: 'design-system',
    thumb: 'thumb-3',
    title: 'Design System AI',
    desc: 'AI 驱动的设计系统生成器，从自然语言描述自动生成组件库。',
    tags: [{ text: 'Figma Plugin', cls: 'tag-pink' }, { text: 'Node.js' }, { text: 'OpenAI', cls: 'tag-blue' }]
  }
]
</script>

<template>
  <section class="section" id="works">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Selected Works</p>
        <h2 class="section-title">Recent Projects</h2>
        <p class="section-desc">A curated selection of AI-driven products and experiments.</p>
      </div>

      <div class="works-grid">
        <WorkCard v-for="work in works" :key="work.id" :work="work" />
      </div>
    </div>
  </section>
</template>
