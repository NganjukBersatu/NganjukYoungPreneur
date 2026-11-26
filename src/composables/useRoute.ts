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

// posisi gulir daftar portofolio, supaya tombol "Kembali ke Portofolio" tidak melompat ke atas
export const scrollMemory: { listY: number | null; restoreY: number | null } = {
  listY: null,
  restoreY: null,
}

// Asal klik proyek: halaman + posisi gulir tempat pengguna membuka detail proyek,
// supaya tombol "Kembali" membawa pengguna ke tempat yang sama (Beranda, Layanan, Portofolio).
export type Origin = { page: PageName; slug: string | null; y: number; label: string }
export const origin = ref<Origin | null>(null)

const originLabel = (page: PageName, s: string | null) => {
  if (page === 'layanan' && s) return 'Layanan'
  const names: Record<PageName, string> = {
    beranda: 'Beranda',
    profil: 'Profil Perusahaan',
    layanan: 'Layanan',
    portofolio: 'Portofolio',
    kontak: 'Kontak',
    panduan: 'Panduan desain',
  }
  return names[page]
}

// Dicatat setiap kali pengguna pindah dari halaman mana pun ke detail proyek.
// Dari detail proyek ke proyek lain, asal tidak berubah.
export function rememberOrigin() {
  if (current.value === 'portofolio' && slug.value) return
  origin.value = { page: current.value, slug: slug.value, y: scrollY, label: originLabel(current.value, slug.value) }
}

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