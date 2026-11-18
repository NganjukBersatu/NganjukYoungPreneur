import { ref } from 'vue'

export const pages = ['beranda', 'profil', 'layanan', 'portofolio', 'kontak', 'panduan'] as const
export type PageName = (typeof pages)[number]

export function isPage(n: string): n is PageName {
  return (pages as readonly string[]).includes(n)
}

const parse = (): { page: PageName; slug: string | null } => {
  const [h, s] = location.hash.replace(/^#\/?/, '').split('/')
  return { page: isPage(h) ? h : 'beranda', slug: s || null }
}

const initial = parse()
export const current = ref<PageName>(initial.page)
// slug detail proyek, mis. "fomo" untuk #portofolio/fomo (null = bukan halaman detail)
export const slug = ref<string | null>(initial.slug)
// naik setiap kali pindah/klik menu, supaya halaman dimuat ulang dan animasi masuk diulang
export const routeKey = ref(0)

export function go(n: PageName, s: string | null = null) {
  try {
    history.replaceState(null, '', '#' + n + (s ? '/' + s : ''))
  } catch {
    /* abaikan */
  }
  current.value = n
  slug.value = s
  routeKey.value++
}

export function initRouter() {
  addEventListener('hashchange', () => {
    const p = parse()
    current.value = p.page
    slug.value = p.slug
    routeKey.value++
  })
}