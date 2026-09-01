export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'CodeWithAI — AI-Powered Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'canvas:aspect-ratio', content: '16:9' },
        {
          name: 'description',
          content:
            'Building the future with Qoder & Trae — crafting intelligent experiences at the intersection of design and code.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap'
        }
      ]
    }
  },

  nitro: {
    preset: 'static'
  }
})
