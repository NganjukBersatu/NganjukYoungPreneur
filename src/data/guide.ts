import type { ColorToken, TypeToken, TokenGroup, TextItem } from '../types'

export const colors: ColorToken[] = [
  { name: 'Ink', token: '--ink', hex: '#080F33', use: 'Latar gelap, judul' },
  { name: 'Biru 600', token: '--b600', hex: '#1D3FD6', use: 'Tombol utama, tautan' },
  { name: 'Biru 700', token: '--b700', hex: '#1733AD', use: 'Hover tombol utama' },
  { name: 'Aksen', token: '--ac', hex: '#14B1F5', use: 'Tombol aksen, ikon, sorotan' },
  { name: 'Biru 100', token: '--b100', hex: '#DCE8FF', use: 'Garis tepi' },
  { name: 'Biru 50', token: '--b50', hex: '#EEF4FF', use: 'Latar bagian selang-seling' },
  { name: 'Teks', token: '--tx', hex: '#1E293B', use: 'Teks isi' },
  { name: 'Teks redup', token: '--mu', hex: '#475569', use: 'Teks pendukung' },
  { name: 'FOMO hijau tua', token: 'merek', hex: '#123F2F', use: 'Hanya untuk FOMO' },
  { name: 'FOMO hijau', token: 'merek', hex: '#23624A', use: 'Hanya untuk FOMO' },
]

export const typography: TypeToken[] = [
  { name: 'Judul besar (H1)', spec: '40 sampai 84px, tebal 800, tinggi baris 1,05', size: 44, weight: 800 },
  { name: 'Judul bagian (H2)', spec: '28 sampai 44px, tebal 800, tinggi baris 1,12', size: 32, weight: 800 },
  { name: 'Judul kartu (H3)', spec: '20px, tebal 800, tinggi baris 1,3', size: 20, weight: 800 },
  { name: 'Teks isi', spec: '15 sampai 17px, normal, tinggi baris 1,6. Maksimal 75 karakter per baris', size: 16, weight: 400 },
  { name: 'Tombol dan menu', spec: '14 sampai 15px, tebal 700', size: 15, weight: 700 },
  { name: 'Keterangan kecil', spec: '12 sampai 13px, tebal 700', size: 13, weight: 700 },
]

export const tokens: TokenGroup[] = [
  { title: 'Spasi', items: ['4, 8, 12, 16, 24, 32, 48, 64, 88px', 'Jarak antarbagian: 88px (desktop), 60px (ponsel)', 'Tepi halaman: 20px sampai 64px'] },
  { title: 'Bentuk', items: ['Input dan ikon: 16px', 'Kartu: 28px', 'Band besar: 36px', 'Tombol dan label: pil (999px)'] },
  { title: 'Bayangan dan gerak', items: ['Kartu saat disorot: 0 22px 44px, biru 12%', 'Tombol utama: 0 10px 24px, biru 28%', 'Transisi 150 sampai 200ms; muncul 550ms', 'Hormati prefers-reduced-motion'] },
]

export const patterns: TextItem[] = [
  { title: 'Hero dua kolom', text: 'Kiri: jejak halaman, judul, satu kalimat pengantar. Kanan: panel Sekilas berisi 3 sampai 4 fakta. Tinggi hero tidak lebih dari 360px di desktop.' },
  { title: 'Isi', text: 'Bagian berganti latar putih dan biru muda. Satu judul H2 per bagian dengan paling banyak satu kalimat pengantar.' },
  { title: 'Penutup', text: 'Band ajakan Mulai kerja sama di halaman Profil, Layanan, dan Portofolio.' },
  { title: 'Navbar', text: 'Mengikuti latar di belakangnya saat digulir: gelap di atas bagian gelap (hero, band, footer), putih di atas bagian terang.' },
]

export const accessibility: TextItem[] = [
  { title: 'Kontras', text: 'Teks isi minimal rasio 4,5:1. Teks di atas Ink memakai putih atau biru muda.' },
  { title: 'Fokus keyboard', text: 'Garis 2px warna aksen dengan jarak 3px. Jangan dihapus.' },
  { title: 'Area sentuh', text: 'Tombol dan menu minimal 44px, tombol utama 48px.' },
]