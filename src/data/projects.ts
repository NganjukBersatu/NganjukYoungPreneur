import type { Project } from '../types'
import fomoLogo from '../assets/fomo-logo.png'

export const projects: Project[] = [
  {
    name: 'Myth',
    initial: 'M',
    tags: ['Web', 'UI/UX'],
    desc: 'Website dengan rancangan antarmuka yang dibuat khusus, agar tampil unik dan nyaman dipakai pengunjung.',
    from: '#080f33',
    to: '#1d3fd6',
  },
  {
    name: 'Fomo',
    initial: 'F',
    tags: ['Mobile', 'UI/UX'],
    desc: 'Aplikasi kasir mobile untuk FOMO (Feed the Panic). Mencatat pesanan dan penjualan jadi lebih cepat dan rapi.',
    from: '#123f2f',
    to: '#23624a',
    logo: fomoLogo,
  },
  {
    name: 'Office Hub',
    initial: 'O',
    tags: ['Web', 'Sistem informasi'],
    desc: 'Sistem informasi berbasis web untuk membantu pengelolaan data dan kegiatan kantor sehari-hari.',
    from: '#080f33',
    to: '#14b1f5',
  },
]