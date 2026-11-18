import type { Project } from '../types'
import fomoLogo from '../assets/fomo-logo.png'

export const projects: Project[] = [
  {
    name: 'Myth',
    initial: 'M',
    tags: ['Web', 'UI/UX'],
    desc: 'Proyek web dengan rancangan antarmuka sendiri. Deskripsi lengkap menyusul.',
    from: '#080f33',
    to: '#1d3fd6',
  },
  {
    name: 'Fomo',
    initial: 'F',
    tags: ['Mobile', 'UI/UX'],
    desc: 'Aplikasi mobile dengan identitas "Feed the Panic". Deskripsi lengkap menyusul.',
    from: '#123f2f',
    to: '#23624a',
    logo: fomoLogo,
  },
  {
    name: 'Office Hub',
    initial: 'O',
    tags: ['Web', 'Sistem informasi'],
    desc: 'Sistem informasi untuk kebutuhan kantor. Deskripsi lengkap menyusul.',
    from: '#080f33',
    to: '#14b1f5',
  },
]