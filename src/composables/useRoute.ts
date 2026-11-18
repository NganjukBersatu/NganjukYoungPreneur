import { ref } from 'vue'

export const pages = ['beranda', 'profil', 'layanan', 'portofolio', 'kontak', 'panduan'] as const
export type PageName = (typeof pages)[number]

const read = (): PageName => {
  const h = location.hash.replace(/^#\/?/, '')
  return (pages as readonly string[]).includes(h) ? (h as PageName) : 'beranda'
}

export const current = ref<PageName>(read())
// naik setiap kali pindah/klik menu, supaya halaman dimuat ulang dan animasi masuk diulang
export const routeKey = ref(0)

export function go(n: PageName) {
  try {
    history.replaceState(null, '', '#' + n)
  } catch {
    /* abaikan */
  }
  current.value = n
  routeKey.value++
}

export function initRouter() {
  addEventListener('hashchange', () => {
    current.value = read()
    routeKey.value++
  })
}

export function isPage(n: string): n is PageName {
  return (pages as readonly string[]).includes(n)
}