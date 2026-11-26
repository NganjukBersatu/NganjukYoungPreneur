import type { NavItem } from '../types'

export const siteName = 'Nganjuk Digital Preneur'

export const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'profil', label: 'Profil Perusahaan' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'portofolio', label: 'Portofolio' },
]

// Judul tab untuk halaman yang namanya tidak sama dengan id-nya
export const pageTitles: Record<string, string> = {
  profil: 'Profil Perusahaan',
  panduan: 'Panduan desain',
}

export const contact = {
  email: 'nganjukdigitalpreneur@gmail.com',
  phone: '0851-1996-6640',
  phoneHref: '085119966640',
  // Nomor WhatsApp dalam format internasional (tanpa +, tanpa 0 di depan)
  whatsapp: '6285119966640',
  address: 'KONG Vector, Nganjuk, Jawa Timur',
  mapsUrl:
    'https://www.google.com/maps/place/Sanggar+Seni+Gratis/@-7.6630738,111.9929512,17z/data=!3m1!4b1!4m6!3m5!1s0x2e784f93d2028ed7:0x669b4760263b49e2!8m2!3d-7.6630791!4d111.9955261!16s%2Fg%2F11qgb5dfmk?entry=ttu',
  // PERHATIAN: sesuaikan dengan akun Instagram yang asli
  instagramUrl: 'https://www.instagram.com/nganjukdigitalpreneur/',
}

export const whatsappLink = (text = '') =>
  `https://wa.me/${contact.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`

// Koordinat dari link Google Maps; dipakai untuk peta tersemat di halaman Kontak
export const mapsEmbedUrl = 'https://maps.google.com/maps?q=-7.6630791,111.9955261&z=17&output=embed'