import type { Directive } from 'vue'

// Animasi masuk saat elemen terlihat di layar (kelas .rv -> .rv.in), sama seperti HTML asli.
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }),
  { threshold: 0.1 },
)

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    requestAnimationFrame(() => requestAnimationFrame(() => io.observe(el)))
  },
  unmounted(el) {
    io.unobserve(el)
  },
}