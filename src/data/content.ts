import type { Service, TextItem } from '../types'

export const services: Service[] = [
  {
    icon: 'globe',
    title: 'All software development',
    desc: 'Dari ide sampai rilis, kami mengerjakan semua jenis pengembangan perangkat lunak sesuai kebutuhan Anda.',
    items: ['Website dan sistem informasi', 'Aplikasi mobile', 'Desain UI/UX', 'Pemeliharaan berkala'],
  },
]

// ikon untuk daftar di halaman Layanan (urut sama dengan services[0].items)
export const serviceItemIcons = ['globe', 'phone', 'layers', 'wr']

export const steps: TextItem[] = [
  { title: 'Diskusi kebutuhan', text: 'Kami mendengar masalah dan tujuan Anda.' },
  { title: 'Rancang dan bangun', text: 'Desain disetujui dulu, baru dikembangkan.' },
  { title: 'Uji dan serah terima', text: 'Hasil diuji bersama sebelum dipakai.' },
]

export const values: TextItem[] = [
  { title: 'Kreatif', text: 'Kami mencari cara baru untuk masalah yang sudah lama.' },
  { title: 'Kolaboratif', text: 'Hasil terbaik lahir dari kerja bersama klien dan tim.' },
  { title: 'Berdampak', text: 'Setiap proyek diukur dari manfaatnya bagi pengguna.' },
]

export const missions = [
  'Membangun produk digital yang berguna dan mudah dipakai.',
  'Mengembangkan produk bersama masukan pengguna.',
  'Membuka ruang belajar bagi anak muda Nganjuk.',
]

export const focusAreas = [
  { icon: 'globe', from: '#080f33', to: '#1d3fd6', title: 'Web dan sistem informasi', text: 'Website dan sistem informasi untuk kebutuhan kantor dan organisasi.', tags: ['Myth', 'Office Hub'] },
  { icon: 'phone', from: '#123f2f', to: '#23624a', title: 'Aplikasi mobile', text: 'Aplikasi ponsel dengan identitas visual yang jelas.', tags: ['Fomo'] },
  { icon: 'layers', from: '#080f33', to: '#14b1f5', title: 'Desain UI/UX', text: 'Rancangan alur dan tampilan yang disetujui dulu sebelum dikembangkan.', tags: ['Semua proyek'] },
]

export const teamGroups = [
  { badge: '</>', title: 'Pengembangan', text: 'Membangun fitur dan menjaga sistem tetap berjalan.' },
  { badge: 'Ui', title: 'UI/UX', text: 'Merancang alur dan tampilan agar mudah dipakai.' },
  { badge: 'QC', title: 'Pengujian', text: 'Menguji hasil bersama sebelum diserahkan.' },
]

export const profileSections = [
  { id: 'p-siapa', label: 'Siapa kami' },
  { id: 'p-visi', label: 'Visi dan misi' },
  { id: 'p-tim', label: 'Tim' },
]

export const contactNeeds = ['Website', 'Sistem informasi', 'Aplikasi mobile', 'Desain UI/UX', 'Pemeliharaan']

export const contactTips: TextItem[] = [
  { title: 'Ceritakan kebutuhan', text: 'Jelaskan masalah yang ingin diselesaikan dan siapa penggunanya.' },
  { title: 'Sebut jenis produk', text: 'Website, sistem informasi, atau aplikasi mobile.' },
  { title: 'Tulis target waktu', text: 'Beri tahu kapan produk perlu dipakai, bila ada.' },
]