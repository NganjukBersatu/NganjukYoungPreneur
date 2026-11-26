<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'
import { origin, slug } from '../composables/useRoute'
import { slugify } from '../utils/slug'
import CtaBand from '../components/CtaBand.vue'

type Detail = {
  lead: string
  headline: string
  aboutTitle: string
  paragraphs: string[]
  featuresTitle: string
  features: { title: string; text: string }[]
  service: string
  status: string
  // Bagian penawaran / kustomisasi (opsional)
  custom?: {
    badge: string
    title: string
    text: string
    options: { title: string; text: string }[]
    businessesTitle: string
    businesses: string[]
    cta: string
  }
}

// Isi detail per proyek. Kuncinya adalah slug (nama proyek huruf kecil, spasi jadi "-").
// Fitur dan penawaran di bawah masih contoh, sesuaikan dengan kondisi yang sebenarnya.
const details: Record<string, Detail> = {
  fomo: {
    lead: 'Aplikasi kasir yang kami buat untuk FOMO, agar pencatatan pesanan dan penjualan jadi lebih cepat dan rapi.',
    headline: 'Aplikasi kasir untuk FOMO',
    aboutTitle: 'Tentang proyek ini',
    paragraphs: [
      'FOMO (Feed the Panic) adalah usaha yang melayani banyak pesanan setiap hari. Kami membuatkan aplikasi kasir khusus untuk FOMO, supaya pesanan pelanggan bisa dicatat langsung di aplikasi, tidak lagi di kertas atau dihitung manual.',
      'Aplikasi ini dipakai di perangkat mobile, jadi kasir bisa melayani pelanggan dari mana saja di area usaha. Tampilannya kami rancang sederhana dan mengikuti identitas hijau tua FOMO, sehingga mudah dipelajari oleh karyawan baru.',
    ],
    featuresTitle: 'Apa yang bisa dilakukan aplikasi ini',
    features: [
      {
        title: 'Catat pesanan dengan cepat',
        text: 'Pilih menu, atur jumlah, dan total langsung terhitung otomatis.',
      },
      {
        title: 'Kelola menu dan harga',
        text: 'Pemilik bisa menambah menu baru atau mengubah harga kapan saja.',
      },
      {
        title: 'Pembayaran dan struk',
        text: 'Pembayaran dicatat dengan jelas, lengkap dengan struk untuk pelanggan.',
      },
      {
        title: 'Laporan penjualan',
        text: 'Lihat ringkasan penjualan harian untuk memantau usaha dengan mudah.',
      },
    ],
    service: 'Aplikasi kasir',
    status: 'Sudah digunakan',
    custom: {
      badge: 'Penawaran khusus',
      title: 'Ingin aplikasi kasir seperti ini untuk usaha Anda?',
      text: 'Aplikasi FOMO bisa kami sesuaikan dengan kebutuhan usaha Anda. Ceritakan cara kerja usaha Anda, lalu kami rancang aplikasi yang pas, bukan aplikasi umum yang memaksa Anda mengikuti caranya.',
      options: [
        {
          title: 'Menu dan produk sesuai usaha',
          text: 'Daftar menu, kategori, varian, dan harga disusun mengikuti produk yang Anda jual.',
        },
        {
          title: 'Tampilan sesuai brand',
          text: 'Warna, logo, dan gaya aplikasi disamakan dengan identitas usaha Anda.',
        },
        {
          title: 'Fitur sesuai kebutuhan',
          text: 'Pilih fitur yang dipakai saja. Fitur tambahan bisa dibahas bersama sejak awal.',
        },
        {
          title: 'Pendampingan penggunaan',
          text: 'Kami bantu agar tim Anda terbiasa memakai aplikasi sebelum dipakai sehari-hari.',
        },
      ],
      businessesTitle: 'Cocok untuk berbagai usaha',
      businesses: ['Kafe', 'Restoran', 'Toko', 'Laundry', 'Barbershop', 'Usaha lainnya'],
      cta: 'Konsultasikan kebutuhan Anda',
    },
  },

  // CEK: draf dari isi projects.ts dan halaman Layanan, cocokkan fitur dan status dengan kenyataan
  myth: {
    lead: 'Website dengan rancangan antarmuka yang dibuat khusus, agar tampil unik dan nyaman dipakai pengunjung.',
    headline: 'Website dengan tampilan khusus',
    aboutTitle: 'Tentang proyek ini',
    paragraphs: [
      'Myth adalah website yang kami rancang dengan antarmuka khusus. Tampilannya dibuat sendiri, bukan template yang dipakai banyak orang, sehingga identitasnya terasa unik.',
      'Kami memulai dari rancangan tampilan dan alur pengguna, lalu mewujudkannya menjadi website yang rapi dan nyaman dipakai pengunjung, baik di HP maupun komputer.',
    ],
    featuresTitle: 'Apa yang kami kerjakan',
    features: [
      { title: 'Rancangan antarmuka khusus', text: 'Warna, huruf, dan tata letak dirancang sendiri agar tampil unik.' },
      { title: 'Alur yang mudah diikuti', text: 'Pengunjung langsung paham ke mana harus melihat dan menekan.' },
      { title: 'Tampil rapi di semua layar', text: 'Tampilan menyesuaikan HP, tablet, dan komputer.' },
      { title: 'Pengembangan website', text: 'Rancangan diwujudkan menjadi website yang siap dipakai.' },
    ],
    service: 'Desain UI/UX dan website',
    status: 'Sudah digunakan', // CEK: ganti "Dalam pengembangan" kalau belum
    custom: {
      badge: 'Penawaran khusus',
      title: 'Ingin website dengan tampilan khusus untuk usaha Anda?',
      text: 'Tampilan Myth bisa kami sesuaikan dengan identitas usaha Anda. Ceritakan kebutuhan Anda, lalu kami rancang website yang pas, bukan tampilan umum yang sama dengan yang lain.',
      options: [
        { title: 'Rancangan sesuai identitas', text: 'Warna, logo, dan gaya disamakan dengan brand Anda.' },
        { title: 'Lihat rancangan dulu', text: 'Anda bisa melihat dan mengoreksi tampilan sebelum pengerjaan dimulai.' },
        { title: 'Halaman sesuai kebutuhan', text: 'Hanya halaman yang Anda butuhkan, bisa ditambah kemudian.' },
        { title: 'Pendampingan awal', text: 'Kami bantu Anda memakai website setelah selesai.' },
      ],
      businessesTitle: 'Cocok untuk berbagai kebutuhan',
      businesses: ['UMKM', 'Sekolah', 'Organisasi', 'Komunitas', 'Usaha lainnya'],
      cta: 'Konsultasikan kebutuhan Anda',
    },
  },

  // CEK: draf dari isi projects.ts dan halaman Layanan, cocokkan modul dan status dengan kenyataan
  'office-hub': {
    lead: 'Sistem informasi berbasis web untuk membantu pengelolaan data dan kegiatan kantor sehari-hari.',
    headline: 'Sistem informasi untuk kantor',
    aboutTitle: 'Tentang proyek ini',
    paragraphs: [
      'Office Hub adalah sistem informasi berbasis web yang membantu kantor mengelola data dan kegiatan sehari-hari dalam satu tempat, tidak lagi tersebar di kertas dan spreadsheet.',
      'Karena berbasis web, sistem ini bisa dibuka lewat browser tanpa perlu memasang aplikasi tambahan.',
    ],
    featuresTitle: 'Apa yang bisa dilakukan sistem ini',
    features: [
      { title: 'Pengelolaan data kantor', text: 'Data dicatat dan dicari di satu tempat, lebih rapi dan mudah ditemukan.' },
      { title: 'Pencatatan kegiatan', text: 'Kegiatan kantor sehari-hari tercatat dengan jelas.' },
      { title: 'Dibuka lewat browser', text: 'Tidak perlu memasang aplikasi, cukup buka dari komputer atau HP.' },
    ],
    service: 'Sistem informasi kantor',
    status: 'Sudah digunakan', // CEK: ganti "Dalam pengembangan" kalau belum
    custom: {
      badge: 'Penawaran khusus',
      title: 'Ingin sistem informasi seperti ini untuk kantor Anda?',
      text: 'Office Hub bisa kami sesuaikan dengan cara kerja kantor Anda. Ceritakan alur kerja dan data yang Anda kelola, lalu kami rancang sistem yang pas.',
      options: [
        { title: 'Modul sesuai kebutuhan', text: 'Hanya fitur yang dipakai kantor Anda yang dibuat.' },
        { title: 'Data sesuai alur kerja', text: 'Isian dan laporan disusun mengikuti cara kerja tim Anda.' },
        { title: 'Hak akses pengguna', text: 'Setiap pengguna hanya melihat bagian yang menjadi tugasnya.' },
        { title: 'Pendampingan penggunaan', text: 'Kami bantu tim Anda terbiasa sebelum dipakai sehari-hari.' },
      ],
      businessesTitle: 'Cocok untuk berbagai instansi',
      businesses: ['Kantor', 'Sekolah', 'Organisasi', 'Komunitas', 'Usaha lainnya'],
      cta: 'Konsultasikan kebutuhan Anda',
    },
  },

  // CEK: draf dari data proyek, cocokkan fitur dan status dengan kenyataan
  'sachi-sweet': {
    lead: 'Website company profile untuk Cafe Sachi Sweet, dengan dashboard admin untuk mengelola produk.',
    headline: 'Website company profile Cafe Sachi Sweet',
    aboutTitle: 'Tentang proyek ini',
    paragraphs: [
      'Sachi Sweet adalah cafe yang ingin tampil rapi dan mudah ditemukan di internet. Kami membuatkan website company profile yang memperkenalkan cafe, menu, dan suasananya kepada pengunjung.',
      'Tampilan website mengikuti identitas Sachi Sweet, dengan warna dan gaya yang disesuaikan dengan logonya. Selain itu, tersedia dashboard admin agar pengelola bisa mengatur produk tanpa bantuan teknis.',
    ],
    featuresTitle: 'Apa yang kami kerjakan',
    features: [
      { title: 'Website company profile', text: 'Memperkenalkan cafe, menu, dan informasi usaha dalam satu website.' },
      { title: 'Tampilan sesuai identitas', text: 'Palet warna dan gaya visual disamakan dengan logo Sachi Sweet.' },
      { title: 'Dashboard admin', text: 'Pengelola bisa mengatur produk yang tampil di website.' },
      { title: 'Pengujian sebelum rilis', text: 'Fitur dashboard diuji di lingkungan staging sebelum dipakai.' },
    ],
    service: 'Website dan dashboard admin',
    status: 'Sudah digunakan', // CEK: ganti "Dalam pengembangan" kalau belum
    custom: {
      badge: 'Penawaran khusus',
      title: 'Ingin website company profile untuk usaha Anda?',
      text: 'Website seperti Sachi Sweet bisa kami sesuaikan dengan identitas usaha Anda. Ceritakan usaha Anda, lalu kami rancang website yang pas.',
      options: [
        { title: 'Tampilan sesuai brand', text: 'Warna, logo, dan gaya website disamakan dengan identitas usaha Anda.' },
        { title: 'Konten sesuai usaha', text: 'Menu, produk, dan informasi disusun mengikuti usaha Anda.' },
        { title: 'Dashboard untuk pengelola', text: 'Produk dan konten bisa diatur sendiri, tanpa bantuan teknis.' },
        { title: 'Pendampingan awal', text: 'Kami bantu Anda memakai website setelah selesai.' },
      ],
      businessesTitle: 'Cocok untuk berbagai usaha',
      businesses: ['Kafe', 'Restoran', 'Toko', 'UMKM', 'Usaha lainnya'],
      cta: 'Konsultasikan kebutuhan Anda',
    },
  },

  // CEK: draf dari data proyek, cocokkan fitur dan status dengan kenyataan
  iwageprek: {
    lead: 'Landing page untuk IWAGEPREK, usaha ikan geprek di Kertosono, Nganjuk.',
    headline: 'Landing page IWAGEPREK',
    aboutTitle: 'Tentang proyek ini',
    paragraphs: [
      'IWAGEPREK adalah usaha ikan geprek khas di Kertosono, Nganjuk. Kami membuatkan landing page agar calon pelanggan bisa langsung melihat menu dan menghubungi penjual.',
      'Halaman ini dibuat ringan dan nyaman dibuka dari HP, karena sebagian besar pelanggan mencari makanan lewat ponsel.',
    ],
    featuresTitle: 'Apa yang kami kerjakan',
    features: [
      { title: 'Landing page satu halaman', text: 'Semua informasi penting usaha ada di satu halaman yang mudah dibaca.' },
      { title: 'Daftar menu', text: 'Menu ditampilkan jelas, lengkap dengan gaya visual yang sesuai logo.' },
      { title: 'Nyaman di HP', text: 'Tampilan dirapikan khusus untuk layar ponsel.' },
      { title: 'Kontak resmi', text: 'Alamat dan kontak penjual tercantum lengkap untuk memudahkan pemesanan.' },
    ],
    service: 'Landing page',
    status: 'Sudah digunakan', // CEK: ganti "Dalam pengembangan" kalau belum
    custom: {
      badge: 'Penawaran khusus',
      title: 'Ingin landing page untuk usaha Anda?',
      text: 'Landing page seperti IWAGEPREK bisa kami buat untuk usaha Anda. Ceritakan produk dan target pelanggan Anda, lalu kami rancang halaman yang pas.',
      options: [
        { title: 'Satu halaman, langsung ke tujuan', text: 'Pengunjung langsung melihat produk dan cara menghubungi Anda.' },
        { title: 'Tampilan sesuai brand', text: 'Warna dan gaya disamakan dengan logo usaha Anda.' },
        { title: 'Ramah layar HP', text: 'Dirancang pertama-tama untuk tampilan ponsel.' },
        { title: 'Tombol kontak aktif', text: 'Pengunjung bisa langsung menghubungi lewat WhatsApp.' },
      ],
      businessesTitle: 'Cocok untuk berbagai usaha',
      businesses: ['Kuliner', 'Toko', 'Jasa', 'UMKM', 'Usaha lainnya'],
      cta: 'Konsultasikan kebutuhan Anda',
    },
  },
}

const project = computed(() => projects.find((p) => slugify(p.name) === slug.value))
const detail = computed(() => (slug.value ? details[slug.value] : undefined))
// Tujuan tombol kembali: tempat pengguna mengeklik proyek (Beranda, Layanan, atau Portofolio)
const backHref = computed(() => {
  const o = origin.value
  return o ? '#' + o.page + (o.slug ? '/' + o.slug : '') : '#portofolio'
})
const backLabel = computed(() => 'Kembali ke ' + (origin.value?.label ?? 'Portofolio'))
const others = computed(() => projects.filter((p) => slugify(p.name) !== slug.value))

// true kalau warna latar proyek terang (mis. Sachi Sweet), supaya teks hero jadi gelap
const isLight = computed(() => {
  const hex = (project.value?.from ?? '#000000').replace('#', '')
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex
  const n = parseInt(full, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6
})

// Gulir halus ke section penawaran
const toCustom = () => document.getElementById('penawaran')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
</script>

<template>
  <div class="pg on">
    <template v-if="project">
      <!-- HERO -->
      <section class="pdv-top">
        <div class="w">
          <a class="pdv-back" :href="backHref">{{ backLabel }}</a>

          <div class="pdv-hero" :class="{ 'is-light': isLight }" :style="{ '--g1': project.from, '--g2': project.to }">
            <div class="pdv-hero-text">
              <p class="pdv-crumb">Beranda / Portofolio / {{ project.name }}</p>
              <div class="pdv-tags">
                <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
              </div>
              <h1>{{ detail?.headline ?? project.name }}</h1>
              <p class="pdv-lead">{{ detail?.lead ?? project.desc }}</p>
              <div class="pdv-actions">
                <a class="pdv-btn-light" href="#kontak">Tanya proyek ini</a>
                <button v-if="detail?.custom" class="pdv-btn-ghost" type="button" @click="toCustom">
                  Lihat penawaran
                </button>
                <a v-else class="pdv-btn-ghost" href="#portofolio">Proyek lainnya</a>
              </div>
            </div>

            <div class="pdv-logo-wrap">
              <div class="pdv-logo">
                <img v-if="project.logo" :src="project.logo" :alt="'Logo ' + project.name" />
                <span v-else>{{ project.initial }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ISI -->
      <section class="pdv-main">
        <div class="w pdv-grid">
          <div class="pdv-content">
            <h2>{{ detail?.aboutTitle ?? 'Tentang proyek ini' }}</h2>
            <template v-if="detail">
              <p v-for="para in detail.paragraphs" :key="para" class="pdv-p">{{ para }}</p>
            </template>
            <p v-else class="pdv-p">{{ project.desc }}</p>

            <template v-if="detail">
              <h2 class="pdv-h2-gap">{{ detail.featuresTitle }}</h2>
              <ul class="pdv-feat">
                <li v-for="(f, i) in detail.features" :key="f.title">
                  <span class="pdv-num">{{ String(i + 1).padStart(2, '0') }}</span>
                  <div>
                    <b>{{ f.title }}</b>
                    <p>{{ f.text }}</p>
                  </div>
                </li>
              </ul>
            </template>
          </div>

          <aside class="pdv-side">
            <div class="pdv-card">
              <h3>Ringkasan proyek</h3>
              <dl>
                <div>
                  <dt>Proyek</dt>
                  <dd>{{ project.name }}</dd>
                </div>
                <div>
                  <dt>Layanan</dt>
                  <dd>{{ detail?.service ?? 'Detail menyusul' }}</dd>
                </div>
                <div>
                  <dt>Platform</dt>
                  <dd>{{ project.tags[0] }}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>
                    <span class="pdv-dot"></span>{{ detail?.status ?? 'Detail menyusul' }}
                  </dd>
                </div>
              </dl>
              <a class="btn bp pdv-wide" href="#kontak">Tanya proyek ini</a>
              <button v-if="detail?.custom" class="pdv-outline" type="button" @click="toCustom">
                Minta penawaran
              </button>
              <p class="pdv-note">Ingin dibuatkan aplikasi serupa? Ceritakan kebutuhan Anda.</p>
            </div>
          </aside>
        </div>
      </section>

      <!-- PENAWARAN / KUSTOMISASI -->
      <section v-if="detail?.custom" id="penawaran" class="pdv-offer">
        <div class="w">
          <div class="pdv-offer-box">
            <div class="pdv-offer-head">
              <span class="pdv-badge">{{ detail.custom.badge }}</span>
              <h2>{{ detail.custom.title }}</h2>
              <p>{{ detail.custom.text }}</p>
            </div>

            <ul class="pdv-opts">
              <li v-for="o in detail.custom.options" :key="o.title">
                <span class="pdv-opt-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <div>
                  <b>{{ o.title }}</b>
                  <p>{{ o.text }}</p>
                </div>
              </li>
            </ul>

            <div class="pdv-offer-foot">
              <div class="pdv-biz">
                <b>{{ detail.custom.businessesTitle }}</b>
                <div>
                  <span v-for="b in detail.custom.businesses" :key="b" class="pdv-chip">{{ b }}</span>
                </div>
              </div>
              <a class="pdv-offer-btn" href="#kontak">{{ detail.custom.cta }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- PROYEK LAINNYA -->
      <section v-if="others.length" class="pdv-more">
        <div class="w">
          <h2>Proyek lainnya</h2>
          <div class="pdv-more-grid">
            <a
              v-for="o in others"
              :key="o.name"
              class="pdv-mini"
              :href="'#portofolio/' + slugify(o.name)"
            >
              <span class="pdv-mini-thumb" :style="{ '--g1': o.from, '--g2': o.to }">
                <img loading="lazy" decoding="async" v-if="o.logo" :src="o.logo" :alt="'Logo ' + o.name" />
                <template v-else>{{ o.initial }}</template>
              </span>
              <span class="pdv-mini-info">
                <b>{{ o.name }}</b>
                <small>{{ o.tags.join(' · ') }}</small>
              </span>
              <span class="pdv-mini-arr" aria-hidden="true">Lihat</span>
            </a>
          </div>
        </div>
      </section>
    </template>

    <section v-else class="pdv-top">
      <div class="w">
        <a class="pdv-back" :href="backHref">{{ backLabel }}</a>
        <h2>Proyek tidak ditemukan</h2>
        <p>Proyek yang kamu cari tidak ada atau sudah dipindahkan.</p>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* ---------- Tombol kembali ---------- */
.pdv-top {
  padding-top: 48px;
}
.pdv-back {
  display: inline-flex;
  align-items: center;
  height: 40px;
  margin-bottom: 24px;
  padding: 0 16px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid #64748b;
  color: #080f33;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: border-color 150ms, background 150ms;
}
.pdv-back:hover {
  border-color: #080f33;
  background: #eef4ff;
}

/* ---------- Hero ---------- */
.pdv-hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 48px 64px;
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  background: var(--g1);
  box-shadow: var(--sh-1);
}
.pdv-hero::before,
.pdv-hero::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.pdv-hero::before {
  width: 420px;
  height: 420px;
  right: -90px;
  top: -140px;
  background: none;
}
.pdv-hero::after {
  width: 300px;
  height: 300px;
  left: -100px;
  bottom: -160px;
  background: none;
}
.pdv-hero-text,
.pdv-logo-wrap {
  position: relative;
  z-index: 1;
}
.pdv-crumb {
  margin: 0 0 16px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}
.pdv-tags {
  margin-bottom: 16px;
}
.pdv-hero .tag {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
}
.pdv-hero h1 {
  margin: 0 0 16px;
  font-size: clamp(30px, 4.2vw, 48px);
  line-height: 1.1;
  color: #fff;
}
.pdv-lead {
  margin: 0 0 32px;
  max-width: 480px;
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}
.pdv-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.pdv-btn-light,
.pdv-btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 6px;
  font: inherit;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 150ms, background 150ms, box-shadow 150ms;
}
.pdv-btn-light {
  background: #fff;
  color: var(--g1); /* ikut warna proyek (FOMO hijau, Myth dan Office Hub biru tua) */
  border: 0;
  box-shadow: var(--sh-1);
}
.pdv-btn-light:hover {
  transform: translateY(-2px);
}
.pdv-btn-ghost {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
}
.pdv-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.14);
}

.pdv-logo-wrap {
  display: grid;
  place-items: center;
}
.pdv-logo {
  --sz: 260px;
  display: grid;
  place-items: center;
  width: var(--sz);
  height: var(--sz);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: none;
  font-size: 110px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
}
.pdv-logo img {
  width: auto;
  height: auto;
  max-width: calc(var(--sz) * 0.8);
  max-height: calc(var(--sz) * 0.8);
  object-fit: contain;
}

/* ---------- Isi ---------- */
.pdv-main {
  padding: 64px 0 24px;
}
.pdv-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
}
.pdv-content h2 {
  margin: 0 0 16px;
}
.pdv-h2-gap {
  margin-top: 40px !important;
}
.pdv-p {
  margin: 0 0 16px;
  line-height: 1.8;
  color: #4a5270;
}

.pdv-feat {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.pdv-feat li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: var(--sh-1);
  transition: transform 150ms, border-color 150ms, box-shadow 150ms;
}
.pdv-feat li:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: var(--sh-2);
}
.pdv-num {
  flex: none;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 14px;
  font-weight: 700;
}
.pdv-feat b {
  display: block;
  margin-bottom: 6px;
  font-size: 16px;
}
.pdv-feat p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #4a5270;
}

/* ---------- Kartu ringkasan ---------- */
.pdv-side {
  position: sticky;
  top: 80px;
}
.pdv-card {
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.14);
  box-shadow: var(--sh-1);
}
.pdv-card h3 {
  margin: 0 0 16px;
  font-size: 18px;
}
.pdv-card dl {
  margin: 0 0 20px;
}
.pdv-card dl > div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px dashed rgba(29, 63, 214, 0.18);
}
.pdv-card dt {
  font-size: 14px;
  color: #4a5270;
}
.pdv-card dd {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
  color: #080f33;
}
.pdv-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background: #1fb26b;
  box-shadow: none;
}
.pdv-wide {
  display: flex;
  justify-content: center;
  width: 100%;
}
.pdv-outline {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
  padding: 12px 20px;
  border-radius: 6px;
  border: 1.5px solid rgba(29, 63, 214, 0.3);
  background: transparent;
  color: #1d3fd6;
  font: inherit;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 150ms, border-color 150ms;
}
.pdv-outline:hover {
  background: #eef3ff;
  border-color: #1d3fd6;
}
.pdv-note {
  margin: 16px 0 0;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  color: #4a5270;
}

/* ---------- Penawaran / kustomisasi ---------- */
.pdv-offer {
  padding: 48px 0 24px;
  scroll-margin-top: 80px;
}
.pdv-offer-box {
  position: relative;
  overflow: hidden;
  padding: 48px 48px;
  border-radius: 12px;
  color: #fff;
  background: #080f33;
  box-shadow: var(--sh-1);
}
.pdv-offer-box::before {
  content: '';
  position: absolute;
  width: 380px;
  height: 380px;
  right: -110px;
  top: -150px;
  border-radius: 50%;
  background: none;
  pointer-events: none;
}
.pdv-offer-box > * {
  position: relative;
}
.pdv-offer-head {
  max-width: 640px;
  margin-bottom: 32px;
}
.pdv-badge {
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.pdv-offer-head h2 {
  margin: 0 0 12px;
  font-size: clamp(24px, 3.2vw, 34px);
  line-height: 1.2;
  color: #fff;
}
.pdv-offer-head p {
  margin: 0;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.82);
}

.pdv-opts {
  list-style: none;
  margin: 0 0 32px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.pdv-opts li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: background 150ms, transform 150ms;
}
.pdv-opts li:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
}
.pdv-opt-ic {
  flex: none;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  color: #1d3fd6;
}
.pdv-opts b {
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
}
.pdv-opts p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
}

.pdv-offer-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 32px;
  border-top: 1px dashed rgba(255, 255, 255, 0.28);
}
.pdv-biz b {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.pdv-biz > div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pdv-chip {
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 13px;
  font-weight: 600;
}
.pdv-offer-btn {
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 6px;
  background: #fff;
  color: #1733ad;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: background 150ms;
}
.pdv-offer-btn:hover {
  background: #eef4ff;
}

/* ---------- Proyek lainnya ---------- */
.pdv-more {
  padding: 40px 0 80px;
}
.pdv-more h2 {
  margin: 0 0 20px;
}
.pdv-more-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.pdv-mini {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px 16px 16px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  color: inherit;
  text-decoration: none;
  transition: transform 150ms, border-color 150ms, box-shadow 150ms;
}
.pdv-mini:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: var(--sh-2);
}
.pdv-mini-thumb {
  flex: none;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: var(--g1);
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  overflow: hidden;
}
.pdv-mini-thumb img {
  width: 80%;
  height: auto;
}
.pdv-mini-info {
  flex: 1;
  display: grid;
  gap: 2px;
}
.pdv-mini-info b {
  font-size: 16px;
}
.pdv-mini-info small {
  font-size: 13px;
  color: #4a5270;
}
.pdv-mini-arr {
  font-size: 14px;
  font-weight: 600;
  color: #1d3fd6;
}

/* ---------- Responsif ---------- */
@media (max-width: 900px) {
  .pdv-hero {
    grid-template-columns: 1fr;
    padding: 40px 32px;
  }
  .pdv-logo-wrap {
    order: -1;
  }
  .pdv-logo {
    --sz: 190px;
    font-size: 80px;
    font-size: 80px;
  }
  .pdv-grid {
    grid-template-columns: 1fr;
  }
  .pdv-side {
    position: static;
  }
  .pdv-offer-box {
    padding: 40px 32px;
  }
}
@media (max-width: 560px) {
  .pdv-top {
    padding-top: 32px;
  }
  .pdv-hero {
    padding: 32px 20px;
    border-radius: 8px;
  }
  .pdv-feat,
  .pdv-opts {
    grid-template-columns: 1fr;
  }
  .pdv-offer-box {
    padding: 32px 20px;
    border-radius: 8px;
  }
  .pdv-offer-btn {
    width: 100%;
    justify-content: center;
  }
}

/* ---------- Kapsul usaha: geser satu baris di HP ---------- */
.pdv-biz {
  min-width: 0;
  max-width: 100%;
}

@media (max-width: 560px) {
  .pdv-biz > div {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
    padding-bottom: 4px;
    -webkit-mask-image: linear-gradient(to right, #000 88%, transparent);
    mask-image: linear-gradient(to right, #000 88%, transparent);
  }
  .pdv-biz > div::-webkit-scrollbar {
    display: none;
  }
  .pdv-chip {
    flex: none;
    white-space: nowrap;
    scroll-snap-align: start;
  }
}

/* ---------- Hero versi terang (latar krem/putih) ---------- */
.pdv-hero.is-light {
  color: #080f33;
  border: 1px solid rgba(8, 15, 51, 0.08);
}
.pdv-hero.is-light .pdv-crumb { color: #475569; }
.pdv-hero.is-light h1 { color: #080f33; }
.pdv-hero.is-light .pdv-lead { color: #3b4560; }
.pdv-hero.is-light .tag {
  background: rgba(8, 15, 51, 0.06);
  color: #080f33;
  border-color: rgba(8, 15, 51, 0.16);
}
.pdv-hero.is-light .pdv-btn-light {
  background: #080f33;
  color: #fff;
}
.pdv-hero.is-light .pdv-btn-ghost {
  color: #080f33;
  border-color: rgba(8, 15, 51, 0.35);
}
.pdv-hero.is-light .pdv-btn-ghost:hover { background: rgba(8, 15, 51, 0.06); }
.pdv-hero.is-light .pdv-logo {
  background: #fff;
  border-color: rgba(8, 15, 51, 0.12);
  color: #080f33;
}
.pdv-hero.is-light .pdv-logo img { border-radius: 8px; }

@media (max-width: 400px) {
  .pdv-hero { padding: 28px 16px; }
  .pdv-logo { --sz: 150px; font-size: 60px; }
  .pdv-actions > * { width: 100%; justify-content: center; }
}
</style>