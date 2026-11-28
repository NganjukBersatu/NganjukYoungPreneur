import type { Project } from '../types'
import mythLogo from '../assets/myth-logo.png'
import fomoLogo from '../assets/fomo-logo.png'
import officeHubLogo from '../assets/officehub-logo.png'
import sachiLogo from '../assets/sachi-logo.png'
import iwageprekLogo from '../assets/iwageprek-logo.png'

export const projects: Project[] = [
  {
    name: 'Myth',
    initial: 'M',
    tags: ['Web', 'UI/UX'],
    desc: 'Website dengan rancangan antarmuka yang dibuat khusus, agar tampil unik dan nyaman dipakai pengunjung.',
    from: '#080f33',
    to: '#1d3fd6',
    logo: mythLogo,
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
    logo: officeHubLogo,
  },
  {
    name: 'Sachi Sweet',
    initial: 'S',
    tags: ['Web', 'Company profile'],
    desc: 'Website company profile untuk Cafe Sachi Sweet, dilengkapi dashboard admin untuk mengelola produk.',
    from: '#fdf2de',
    to: '#ffffff',
    logo: sachiLogo,
  },
  {
    name: 'IwaGeprek',
    initial: 'I',
    tags: ['Web', 'Landing page'],
    desc: 'Landing page untuk IWAGEPREK, usaha ikan geprek di Kertosono, Nganjuk, lengkap dengan menu dan kontak resmi.',
    from: '#031a2b',
    to: '#0a7fb0',
    logo: iwageprekLogo,
  },
]
