<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'
import { slug } from '../composables/useRoute'
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
}

const project = computed(() => projects.find((p) => slugify(p.name) === slug.value))
const detail = computed(() => (slug.value ? details[slug.value] : undefined))
const others = computed(() => projects.filter((p) => slugify(p.name) !== slug.value))

// Gulir halus ke section penawaran
const toCustom = () => document.getElementById('penawaran')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
</script>

<template>
  <div class="pg on">
    <template v-if="project">
      <!-- HERO -->
      <section class="pdv-top">
        <div class="w">
          <a class="pdv-back" href="#portofolio">
            <span class="pdv-back-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5" />
                <path d="M11 6l-6 6 6 6" />
              </svg>
            </span>
            <span>Kembali ke Portofolio</span>
          </a>

          <div class="pdv-hero" :style="{ '--g1': project.from, '--g2': project.to }">
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
              <a class="pdv-offer-btn" href="#kontak">
                {{ detail.custom.cta }}
                <span aria-hidden="true">&rarr;</span>
              </a>
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
                <img v-if="o.logo" :src="o.logo" :alt="'Logo ' + o.name" />
                <template v-else>{{ o.initial }}</template>
              </span>
              <span class="pdv-mini-info">
                <b>{{ o.name }}</b>
                <small>{{ o.tags.join(' · ') }}</small>
              </span>
              <span class="pdv-mini-arr" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </template>

    <section v-else class="pdv-top">
      <div class="w">
        <a class="pdv-back" href="#portofolio">
          <span class="pdv-back-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5" />
              <path d="M11 6l-6 6 6 6" />
            </svg>
          </span>
          <span>Kembali ke Portofolio</span>
        </a>
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
  padding-top: 130px; /* ruang untuk header yang melayang */
}
.pdv-back {
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
.pdv-back-ic {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #eef3ff;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.pdv-back:hover {
  border-color: #1d3fd6;
  box-shadow: 0 10px 24px rgba(29, 63, 214, 0.18);
  transform: translateY(-1px);
}
.pdv-back:hover .pdv-back-ic {
  background: #1d3fd6;
  color: #fff;
  transform: translateX(-3px);
}
.pdv-back:focus-visible {
  outline: 3px solid rgba(29, 63, 214, 0.35);
  outline-offset: 2px;
}

/* ---------- Hero ---------- */
.pdv-hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 52px 56px;
  border-radius: 32px;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(135deg, var(--g1), var(--g2));
  box-shadow: 0 28px 70px rgba(8, 15, 51, 0.22);
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
  background: radial-gradient(circle, rgba(255, 255, 255, 0.16), transparent 65%);
}
.pdv-hero::after {
  width: 300px;
  height: 300px;
  left: -100px;
  bottom: -160px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 65%);
}
.pdv-hero-text,
.pdv-logo-wrap {
  position: relative;
  z-index: 1;
}
.pdv-crumb {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}
.pdv-tags {
  margin-bottom: 14px;
}
.pdv-hero .tag {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
}
.pdv-hero h1 {
  margin: 0 0 14px;
  font-size: clamp(30px, 4.2vw, 48px);
  line-height: 1.1;
  color: #fff;
}
.pdv-lead {
  margin: 0 0 28px;
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
  padding: 13px 24px;
  border-radius: 999px;
  font: inherit;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
}
.pdv-btn-light {
  background: #fff;
  color: #123f2f;
  border: 0;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
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
  display: grid;
  place-items: center;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 0 0 18px rgba(255, 255, 255, 0.06), 0 30px 60px rgba(0, 0, 0, 0.25);
  font-size: 110px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
}
.pdv-logo img {
  width: 82%;
  height: auto;
  object-fit: contain;
}

/* ---------- Isi ---------- */
.pdv-main {
  padding: 56px 0 24px;
}
.pdv-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
}
.pdv-content h2 {
  margin: 0 0 14px;
}
.pdv-h2-gap {
  margin-top: 40px !important;
}
.pdv-p {
  margin: 0 0 14px;
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
  gap: 14px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.pdv-feat li:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 16px 34px rgba(29, 63, 214, 0.12);
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
  font-weight: 800;
}
.pdv-feat b {
  display: block;
  margin-bottom: 5px;
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
  top: 120px;
}
.pdv-card {
  padding: 26px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.14);
  box-shadow: 0 20px 50px rgba(8, 15, 51, 0.1);
}
.pdv-card h3 {
  margin: 0 0 14px;
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
  margin-right: 7px;
  border-radius: 50%;
  background: #1fb26b;
  box-shadow: 0 0 0 4px rgba(31, 178, 107, 0.18);
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
  margin-top: 10px;
  padding: 12px 20px;
  border-radius: 999px;
  border: 1.5px solid rgba(29, 63, 214, 0.3);
  background: transparent;
  color: #1d3fd6;
  font: inherit;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.pdv-outline:hover {
  background: #eef3ff;
  border-color: #1d3fd6;
}
.pdv-note {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  color: #4a5270;
}

/* ---------- Penawaran / kustomisasi ---------- */
.pdv-offer {
  padding: 48px 0 24px;
  scroll-margin-top: 110px;
}
.pdv-offer-box {
  position: relative;
  overflow: hidden;
  padding: 48px 52px;
  border-radius: 32px;
  color: #fff;
  background: linear-gradient(135deg, #080f33, #1d3fd6);
  box-shadow: 0 28px 70px rgba(29, 63, 214, 0.28);
}
.pdv-offer-box::before {
  content: '';
  position: absolute;
  width: 380px;
  height: 380px;
  right: -110px;
  top: -150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 177, 245, 0.35), transparent 65%);
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
  margin-bottom: 14px;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 800;
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
  gap: 14px;
}
.pdv-opts li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: background 0.2s, transform 0.2s;
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
  padding-top: 28px;
  border-top: 1px dashed rgba(255, 255, 255, 0.28);
}
.pdv-biz b {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.pdv-biz > div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pdv-chip {
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 13px;
  font-weight: 600;
}
.pdv-offer-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 28px;
  border-radius: 999px;
  background: #fff;
  color: #1d3fd6;
  font-weight: 800;
  font-size: 15px;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
}
.pdv-offer-btn:hover {
  transform: translateY(-2px);
}
.pdv-offer-btn span {
  transition: transform 0.2s;
}
.pdv-offer-btn:hover span {
  transform: translateX(4px);
}

/* ---------- Proyek lainnya ---------- */
.pdv-more {
  padding: 40px 0 72px;
}
.pdv-more h2 {
  margin: 0 0 18px;
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
  padding: 14px 18px 14px 14px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.pdv-mini:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 16px 34px rgba(29, 63, 214, 0.12);
}
.pdv-mini-thumb {
  flex: none;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--g1), var(--g2));
  color: #fff;
  font-size: 26px;
  font-weight: 800;
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
  font-size: 20px;
  font-weight: 700;
  color: #1d3fd6;
  transition: transform 0.2s;
}
.pdv-mini:hover .pdv-mini-arr {
  transform: translateX(4px);
}

/* ---------- Responsif ---------- */
@media (max-width: 900px) {
  .pdv-hero {
    grid-template-columns: 1fr;
    padding: 36px 28px;
  }
  .pdv-logo-wrap {
    order: -1;
  }
  .pdv-logo {
    width: 190px;
    height: 190px;
    font-size: 80px;
  }
  .pdv-grid {
    grid-template-columns: 1fr;
  }
  .pdv-side {
    position: static;
  }
  .pdv-offer-box {
    padding: 36px 28px;
  }
}
@media (max-width: 560px) {
  .pdv-top {
    padding-top: 110px;
  }
  .pdv-hero {
    padding: 28px 20px;
    border-radius: 24px;
  }
  .pdv-feat,
  .pdv-opts {
    grid-template-columns: 1fr;
  }
  .pdv-offer-box {
    padding: 28px 20px;
    border-radius: 24px;
  }
  .pdv-offer-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>