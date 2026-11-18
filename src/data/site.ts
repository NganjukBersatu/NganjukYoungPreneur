import type { NavItem } from '../types'

export const siteName = 'Nganjuk Digital Preneur'

export const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'profil', label: 'Profil Perusahaan' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'kontak', label: 'Kontak' },
]

// Judul tab untuk halaman yang namanya tidak sama dengan id-nya
export const pageTitles: Record<string, string> = {
  profil: 'Profil Perusahaan',
  panduan: 'Panduan desain',
}

// Data contoh: ganti dengan data asli
export const contact = {
  email: 'halo@contoh.com',
  phone: '0812-0000-0000',
  phoneHref: '081200000000',
  address: 'Jl. Contoh No. 1, Nganjuk',
  mapsUrl: 'https://www.google.com/maps/search/Nganjuk',
}