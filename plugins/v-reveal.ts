/**
 * v-reveal directive.
 * Registered on both server and client so SSR rendering can resolve the
 * directive; the IntersectionObserver logic runs only in the browser
 * (mounted hook is never executed during SSR serialization).
 * Replicates the original scroll animation: cards fade in + slide up once
 * they enter the viewport.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      observer.observe(el)
    }
  })
})
