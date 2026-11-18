<script setup lang="ts">
import { computed } from 'vue'
import { serviceItemIcons, services } from '../data/content'
import { projects } from '../data/projects'
import { slug } from '../composables/useRoute'
import { slugify } from '../utils/slug'
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'

type Detail = {
  lead: string
  paragraphs: string[]
  includesTitle: string
  includes: { title: string; text: string }[]
  examples: string[]
  audience: string[]
  results: string[]
  projectNames: string[] // nama proyek di portofolio yang terkait
}

// Isi per layanan. Kunci = slug dari nama layanan di content.ts.
// Semua isi di bawah masih contoh, sisakan hanya yang benar-benar bisa kalian kerjakan.
const details: Record<string, Detail> = {
  'website-dan-sistem-informasi': {
    lead: 'Website dan sistem informasi untuk usaha, sekolah, kantor, atau komunitas, dari yang sederhana sampai yang punya banyak fitur.',
    paragraphs: [
      'Kami membuat website yang tampil rapi di HP maupun komputer, dan sistem informasi yang membantu pekerjaan sehari-hari berjalan lebih tertib. Semuanya dirancang mengikuti cara kerja Anda, bukan sebaliknya.',
      'Cocok untuk Anda yang ingin dikenal lebih luas di internet, atau yang masih mencatat data di kertas dan spreadsheet yang berserakan.',
    ],
    includesTitle: 'Yang bisa kami kerjakan',
    includes: [
      { title: 'Website profil dan landing page', text: 'Halaman yang memperkenalkan usaha atau produk Anda dengan jelas.' },
      { title: 'Website sekolah, UMKM, dan organisasi', text: 'Informasi, berita, galeri, dan kontak dalam satu tempat.' },
      { title: 'Sistem informasi kantor', text: 'Inventaris, keuangan, kepegawaian, dan arsip digital.' },
      { title: 'Dashboard admin dan laporan', text: 'Data dirangkum dalam tampilan yang mudah dibaca.' },
      { title: 'Toko online dan katalog', text: 'Daftar produk, stok, dan pesanan yang dikelola lewat satu sistem.' },
      { title: 'Login dan hak akses', text: 'Setiap pengguna hanya melihat bagian yang menjadi tugasnya.' },
    ],
    examples: ['Company profile', 'Website sekolah', 'Inventaris', 'Keuangan', 'Kepegawaian', 'Toko online'],
    audience: ['Usaha yang ingin tampil di internet', 'Kantor yang masih mencatat manual', 'Sekolah dan organisasi'],
    results: ['Website atau sistem siap dipakai', 'Panduan penggunaan', 'Pendampingan di awal pemakaian'],
    projectNames: ['Office Hub', 'Myth'],
  },
  'aplikasi-mobile': {
    lead: 'Aplikasi Android dan iOS yang dibuat sesuai kebutuhan usaha Anda, dengan tampilan sederhana dan mudah dipelajari.',
    paragraphs: [
      'Aplikasi mobile membuat pekerjaan bisa dilakukan dari mana saja. Kami merancang aplikasi yang nyaman dipakai karyawan baru sekalipun, dengan tampilan yang mengikuti identitas usaha Anda.',
      'Salah satu contohnya adalah aplikasi kasir yang kami buat untuk FOMO.',
    ],
    includesTitle: 'Yang bisa kami kerjakan',
    includes: [
      { title: 'Aplikasi kasir', text: 'Catat pesanan, hitung total, dan lihat laporan penjualan.' },
      { title: 'Aplikasi pesan antar', text: 'Pelanggan memesan, usaha Anda menerima dan memproses pesanan.' },
      { title: 'Aplikasi absensi', text: 'Pencatatan kehadiran tim yang lebih rapi dan mudah direkap.' },
      { title: 'Aplikasi internal usaha', text: 'Alat bantu kerja yang disesuaikan dengan alur tim Anda.' },
    ],
    examples: ['Kasir', 'Pesan antar', 'Absensi', 'Aplikasi internal'],
    audience: ['Kafe, restoran, dan toko', 'Usaha dengan banyak karyawan lapangan', 'Bisnis yang ingin punya aplikasi sendiri'],
    results: ['Aplikasi yang siap dipakai', 'Tampilan sesuai brand', 'Pendampingan penggunaan'],
    projectNames: ['Fomo'],
  },
  'desain-ui-ux': {
    lead: 'Rancangan tampilan yang rapi dan mudah dipahami, sebelum atau tanpa harus dilanjutkan ke pengerjaan.',
    paragraphs: [
      'Desain yang baik membuat orang langsung paham cara memakai aplikasi atau website Anda. Kami merancang alur dan tampilannya terlebih dahulu, sehingga Anda bisa melihat dan mengoreksi sebelum pengerjaan dimulai.',
      'Layanan ini juga bisa berdiri sendiri, misalnya untuk merapikan tampilan aplikasi lama.',
    ],
    includesTitle: 'Yang bisa kami kerjakan',
    includes: [
      { title: 'Rancangan alur pengguna', text: 'Menentukan langkah pengguna dari awal sampai tujuan tercapai.' },
      { title: 'Desain tampilan', text: 'Warna, huruf, dan tata letak yang konsisten dengan identitas Anda.' },
      { title: 'Prototipe', text: 'Contoh tampilan yang bisa dicoba sebelum dibuat sungguhan.' },
      { title: 'Desain ulang', text: 'Merapikan tampilan website atau aplikasi yang sudah ada.' },
    ],
    examples: ['Prototipe', 'Desain ulang', 'Sistem warna', 'Tata letak'],
    audience: ['Yang baru punya ide dan ingin melihat bentuknya', 'Pemilik aplikasi lama yang tampilannya membingungkan', 'Tim yang butuh acuan desain'],
    results: ['File desain tampilan', 'Prototipe yang bisa dicoba', 'Panduan gaya (warna dan huruf)'],
    projectNames: ['Myth', 'Fomo'],
  },
  'pemeliharaan-berkala': {
    lead: 'Perawatan setelah aplikasi atau website dipakai, supaya tetap berjalan lancar dan bisa terus berkembang.',
    paragraphs: [
      'Software perlu dirawat. Kami membantu memperbaiki masalah yang muncul, menambah fitur baru, dan menjaga aplikasi tetap berjalan seiring kebutuhan usaha Anda berubah.',
      'Perawatan bisa dilakukan untuk proyek yang kami buat, atau untuk sistem yang dibuat pihak lain, tergantung kondisinya.',
    ],
    includesTitle: 'Yang bisa kami kerjakan',
    includes: [
      { title: 'Perbaikan masalah', text: 'Menangani bug dan gangguan yang muncul saat dipakai.' },
      { title: 'Penambahan fitur', text: 'Mengembangkan fitur baru sesuai kebutuhan terbaru.' },
      { title: 'Pembaruan dan migrasi', text: 'Memindahkan atau memperbarui sistem agar tetap aman dan mutakhir.' },
      { title: 'Hosting dan pemantauan', text: 'Membantu menjaga website atau sistem tetap online.' },
    ],
    examples: ['Perbaikan bug', 'Fitur baru', 'Migrasi', 'Hosting'],
    audience: ['Yang sudah punya aplikasi tetapi sering bermasalah', 'Usaha yang ingin menambah fitur', 'Pemilik sistem lama yang perlu dirapikan'],
    results: ['Masalah tertangani', 'Laporan singkat apa yang dikerjakan', 'Jadwal perawatan yang disepakati'],
    projectNames: [],
  },
}

// Alur kerja yang sama untuk semua layanan
const steps = [
  { title: 'Diskusi kebutuhan', text: 'Anda bercerita, kami mendengarkan dan mencatat.' },
  { title: 'Rancangan', text: 'Kami susun gambaran hasil akhir untuk Anda koreksi.' },
  { title: 'Pengerjaan', text: 'Dikerjakan bertahap, Anda bisa melihat perkembangannya.' },
  { title: 'Uji coba', text: 'Dicoba bersama sebelum dipakai sungguhan.' },
  { title: 'Rilis dan dukungan', text: 'Diserahkan dan didampingi di awal pemakaian.' },
]

const list = computed(() =>
  services[0].items.map((name, i) => ({ name, slug: slugify(name), icon: serviceItemIcons[i] })),
)
const index = computed(() => list.value.findIndex((s) => s.slug === slug.value))
const service = computed(() => (index.value >= 0 ? list.value[index.value] : undefined))
const detail = computed(() => (slug.value ? details[slug.value] : undefined))
const next = computed(() => (index.value >= 0 ? list.value[(index.value + 1) % list.value.length] : undefined))

const related = computed(() =>
  (detail.value?.projectNames ?? [])
    .map((n) => projects.find((p) => p.name === n))
    .filter((p): p is (typeof projects)[number] => !!p),
)
</script>

<template>
  <div class="pg on">
    <template v-if="service">
      <!-- HERO -->
      <section class="svd-top">
        <div class="w">
          <a class="svd-back" href="#layanan">
            <span class="svd-back-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5" />
                <path d="M11 6l-6 6 6 6" />
              </svg>
            </span>
            <span>Kembali ke Layanan</span>
          </a>

          <div class="svd-hero">
            <div class="svd-hero-text">
              <p class="svd-crumb">Beranda / Layanan / {{ service.name }}</p>
              <h1>{{ service.name }}</h1>
              <p class="svd-lead">{{ detail?.lead ?? 'Detail layanan ini akan segera ditambahkan.' }}</p>
              <div class="svd-actions">
                <a class="svd-btn-light" href="#kontak">Konsultasi layanan ini</a>
                <a class="svd-btn-ghost" href="#layanan">Semua layanan</a>
              </div>
            </div>
            <div class="svd-hero-ic" aria-hidden="true">
              <AppIcon :name="service.icon" />
            </div>
          </div>

          <!-- Pindah antar layanan -->
          <nav class="svd-tabs" aria-label="Layanan lainnya">
            <a
              v-for="s in list"
              :key="s.slug"
              :href="'#layanan/' + s.slug"
              :class="{ on: s.slug === slug }"
            >{{ s.name }}</a>
          </nav>
        </div>
      </section>

      <template v-if="detail">
        <!-- ISI -->
        <section class="svd-main">
          <div class="w svd-grid">
            <div class="svd-content">
              <h2>Tentang layanan ini</h2>
              <p v-for="para in detail.paragraphs" :key="para" class="svd-p">{{ para }}</p>

              <h2 class="svd-gap">{{ detail.includesTitle }}</h2>
              <ul class="svd-inc">
                <li v-for="(f, i) in detail.includes" :key="f.title">
                  <span class="svd-num">{{ String(i + 1).padStart(2, '0') }}</span>
                  <div>
                    <b>{{ f.title }}</b>
                    <p>{{ f.text }}</p>
                  </div>
                </li>
              </ul>

              <h2 class="svd-gap">Alur pengerjaan</h2>
              <ol class="svd-steps">
                <li v-for="(s, i) in steps" :key="s.title">
                  <span class="svd-step-n">{{ i + 1 }}</span>
                  <div>
                    <b>{{ s.title }}</b>
                    <p>{{ s.text }}</p>
                  </div>
                </li>
              </ol>

              <template v-if="related.length">
                <h2 class="svd-gap">Contoh proyek terkait</h2>
                <div class="svd-rel">
                  <a
                    v-for="p in related"
                    :key="p.name"
                    class="svd-rel-card"
                    :href="'#portofolio/' + slugify(p.name)"
                  >
                    <span class="svd-rel-thumb" :style="{ '--g1': p.from, '--g2': p.to }">
                      <img v-if="p.logo" :src="p.logo" :alt="'Logo ' + p.name" />
                      <template v-else>{{ p.initial }}</template>
                    </span>
                    <span class="svd-rel-info">
                      <b>{{ p.name }}</b>
                      <small>{{ p.tags.join(' · ') }}</small>
                    </span>
                    <span class="svd-rel-arr" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </template>
            </div>

            <aside class="svd-side">
              <div class="svd-card">
                <h3>Contoh pekerjaan</h3>
                <div class="svd-chips">
                  <span v-for="e in detail.examples" :key="e" class="svd-chip">{{ e }}</span>
                </div>

                <h3>Cocok untuk</h3>
                <ul class="svd-list">
                  <li v-for="a in detail.audience" :key="a">{{ a }}</li>
                </ul>

                <h3>Yang Anda terima</h3>
                <ul class="svd-list svd-list-ck">
                  <li v-for="r in detail.results" :key="r">{{ r }}</li>
                </ul>

                <a class="btn bp svd-wide" href="#kontak">Minta penawaran</a>
                <p class="svd-note">Biaya dan waktu dibahas setelah kebutuhan Anda jelas.</p>
              </div>
            </aside>
          </div>
        </section>

        <!-- LAYANAN BERIKUTNYA -->
        <section v-if="next" class="svd-next">
          <div class="w">
            <a class="svd-next-card" :href="'#layanan/' + next.slug">
              <span>
                <small>Layanan berikutnya</small>
                <b>{{ next.name }}</b>
              </span>
              <span class="svd-next-arr" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </section>
      </template>
    </template>

    <section v-else class="svd-top">
      <div class="w">
        <a class="svd-back" href="#layanan">
          <span class="svd-back-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5" />
              <path d="M11 6l-6 6 6 6" />
            </svg>
          </span>
          <span>Kembali ke Layanan</span>
        </a>
        <h2>Layanan tidak ditemukan</h2>
        <p>Layanan yang kamu cari tidak ada atau sudah dipindahkan.</p>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* ---------- Tombol kembali ---------- */
.svd-top {
  padding-top: 130px;
}
.svd-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
  padding: 6px 20px 6px 6px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.18);
  box-shadow: 0 4px 14px rgba(8, 15, 51, 0.06);
  color: #1d3fd6;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.svd-back-ic {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #eef3ff;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.svd-back:hover {
  border-color: #1d3fd6;
  box-shadow: 0 10px 24px rgba(29, 63, 214, 0.18);
  transform: translateY(-1px);
}
.svd-back:hover .svd-back-ic {
  background: #1d3fd6;
  color: #fff;
  transform: translateX(-3px);
}

/* ---------- Hero ---------- */
.svd-hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 52px 56px;
  border-radius: 32px;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(135deg, #080f33, #1d3fd6);
  box-shadow: 0 28px 70px rgba(29, 63, 214, 0.25);
}
.svd-hero::before {
  content: '';
  position: absolute;
  width: 420px;
  height: 420px;
  right: -90px;
  top: -140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 177, 245, 0.4), transparent 65%);
  pointer-events: none;
}
.svd-hero-text,
.svd-hero-ic {
  position: relative;
  z-index: 1;
}
.svd-crumb {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}
.svd-hero h1 {
  margin: 0 0 14px;
  font-size: clamp(30px, 4.2vw, 46px);
  line-height: 1.1;
  color: #fff;
}
.svd-lead {
  margin: 0 0 28px;
  max-width: 520px;
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}
.svd-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.svd-btn-light,
.svd-btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 13px 24px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
}
.svd-btn-light {
  background: #fff;
  color: #1d3fd6;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
}
.svd-btn-light:hover {
  transform: translateY(-2px);
}
.svd-btn-ghost {
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
}
.svd-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.14);
}
.svd-hero-ic {
  display: grid;
  place-items: center;
  justify-self: center;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 0 0 16px rgba(255, 255, 255, 0.06);
  color: #fff;
}
.svd-hero-ic :deep(svg) {
  width: 80px;
  height: 80px;
}

/* ---------- Tab antar layanan ---------- */
.svd-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}
.svd-tabs a {
  padding: 10px 18px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.18);
  color: #080f33;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.svd-tabs a:hover {
  border-color: #1d3fd6;
  color: #1d3fd6;
}
.svd-tabs a.on {
  background: #1d3fd6;
  border-color: #1d3fd6;
  color: #fff;
}

/* ---------- Isi ---------- */
.svd-main {
  padding: 48px 0 24px;
}
.svd-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}
.svd-content h2 {
  margin: 0 0 14px;
}
.svd-gap {
  margin-top: 44px !important;
}
.svd-p {
  margin: 0 0 14px;
  line-height: 1.8;
  color: #4a5270;
}

.svd-inc {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.svd-inc li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.svd-inc li:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 16px 34px rgba(29, 63, 214, 0.12);
}
.svd-num {
  flex: none;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 14px;
  font-weight: 800;
}
.svd-inc b,
.svd-steps b {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}
.svd-inc p,
.svd-steps p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #4a5270;
}

/* Alur pengerjaan */
.svd-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.svd-steps li {
  position: relative;
  display: flex;
  gap: 16px;
  padding-bottom: 22px;
}
.svd-steps li:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 17px;
  top: 38px;
  bottom: 2px;
  width: 2px;
  background: rgba(29, 63, 214, 0.2);
}
.svd-step-n {
  flex: none;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1d3fd6;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  box-shadow: 0 0 0 5px #eef3ff;
}

/* Proyek terkait */
.svd-rel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}
.svd-rel-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px 12px 12px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.svd-rel-card:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 16px 34px rgba(29, 63, 214, 0.12);
}
.svd-rel-thumb {
  flex: none;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--g1), var(--g2));
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  overflow: hidden;
}
.svd-rel-thumb img {
  width: 80%;
  height: auto;
}
.svd-rel-info {
  flex: 1;
  display: grid;
  gap: 2px;
}
.svd-rel-info small {
  font-size: 13px;
  color: #4a5270;
}
.svd-rel-arr {
  font-weight: 700;
  color: #1d3fd6;
  transition: transform 0.2s;
}
.svd-rel-card:hover .svd-rel-arr {
  transform: translateX(4px);
}

/* ---------- Kartu samping ---------- */
.svd-side {
  position: sticky;
  top: 120px;
}
.svd-card {
  padding: 26px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.14);
  box-shadow: 0 20px 50px rgba(8, 15, 51, 0.1);
}
.svd-card h3 {
  margin: 0 0 12px;
  font-size: 16px;
}
.svd-card h3:not(:first-child) {
  margin-top: 22px;
}
.svd-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.svd-chip {
  padding: 6px 14px;
  border-radius: 999px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 13px;
  font-weight: 700;
}
.svd-list {
  list-style: none;
  margin: 0 0 4px;
  padding: 0;
  display: grid;
  gap: 8px;
}
.svd-list li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  line-height: 1.6;
  color: #4a5270;
}
.svd-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #1d3fd6;
}
.svd-list-ck li::before {
  background: #1fb26b;
}
.svd-wide {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
}
.svd-note {
  margin: 12px 0 0;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  color: #4a5270;
}

/* ---------- Layanan berikutnya ---------- */
.svd-next {
  padding: 32px 0 72px;
}
.svd-next-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 30px;
  border-radius: 24px;
  background: #eef3ff;
  border: 1px dashed rgba(29, 63, 214, 0.35);
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
}
.svd-next-card:hover {
  transform: translateY(-3px);
  background: #e2eaff;
}
.svd-next-card small {
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4a5270;
}
.svd-next-card b {
  font-size: 20px;
}
.svd-next-arr {
  font-size: 26px;
  font-weight: 700;
  color: #1d3fd6;
  transition: transform 0.2s;
}
.svd-next-card:hover .svd-next-arr {
  transform: translateX(6px);
}

/* ---------- Responsif ---------- */
@media (max-width: 900px) {
  .svd-hero {
    grid-template-columns: 1fr;
    padding: 36px 28px;
  }
  .svd-hero-ic {
    order: -1;
    width: 120px;
    height: 120px;
  }
  .svd-hero-ic :deep(svg) {
    width: 52px;
    height: 52px;
  }
  .svd-grid {
    grid-template-columns: 1fr;
  }
  .svd-side {
    position: static;
  }
}
@media (max-width: 560px) {
  .svd-top {
    padding-top: 110px;
  }
  .svd-hero {
    padding: 28px 20px;
    border-radius: 24px;
  }
  .svd-inc {
    grid-template-columns: 1fr;
  }
  .svd-next-card {
    padding: 20px;
  }
}
</style>