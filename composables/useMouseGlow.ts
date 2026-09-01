/**
 * Cursor-following glow effect.
 * Mirrors the original behavior: updates --mouse-x / --mouse-y
 * CSS variables on the document root as the pointer moves.
 */
export function useMouseGlow() {
  onMounted(() => {
    const onMouseMove = (e: MouseEvent) => {
      const root = document.documentElement
      root.style.setProperty('--mouse-x', `${e.clientX}px`)
      root.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    document.addEventListener('mousemove', onMouseMove)

    onUnmounted(() => {
      document.removeEventListener('mousemove', onMouseMove)
    })
  })
}
