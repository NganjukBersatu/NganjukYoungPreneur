<script setup lang="ts">
import { missions, profileSections, teamGroups, values } from '../data/content'
import { projects } from '../data/projects'
import { delay } from '../utils/delay'
import { slugify } from '../utils/slug'
import CtaBand from '../components/CtaBand.vue'
import LogoMark from '../components/LogoMark.vue'
import PageHero from '../components/PageHero.vue'

const stats = [
  { value: String(projects.length), label: 'produk digital' },
  { value: 'Nganjuk', label: 'kota asal kami' },
  { value: 'Semua jenis', label: 'software yang kami kerjakan' },
]

// Contoh saja: sisakan yang benar-benar bisa kalian kerjakan
const devAreas = [
  {
    title: 'Website',
    text: 'Dari company profile sampai portal dengan banyak halaman.',
    items: ['Company profile', 'Landing page', 'Website sekolah/UMKM'],
    from: '#080f33',
    to: '#1d3fd6',
  },
  {
    title: 'Aplikasi mobile',
    text: 'Aplikasi Android dan iOS untuk kebutuhan usaha.',
    items: ['Aplikasi kasir', 'Pesan antar', 'Absensi'],
    from: '#123f2f',
    to: '#23624a',
  },
  {
    title: 'Sistem informasi',
    text: 'Sistem untuk merapikan kerja kantor dan usaha.',
    items: ['Inventaris', 'Keuangan', 'Kepegawaian'],
    from: '#080f33',
    to: '#14b1f5',
  },
  {
    title: 'Kasir dan toko online',
    text: 'Penjualan, stok, dan laporan dalam satu sistem.',
    items: ['POS', 'Toko online', 'Laporan penjualan'],
    from: '#3b1d8f',
    to: '#7a4dff',
  },
  {
    title: 'Backend dan integrasi',
    text: 'Server, database, dan sambungan ke layanan lain.',
    items: ['API', 'Pembayaran', 'Notifikasi WhatsApp'],
    from: '#0b4a5c',
    to: '#14a3b8',
  },
  {
    title: 'UI/UX dan perawatan',
    text: 'Rancangan tampilan serta perbaikan dan pengembangan lanjutan.',
    items: ['Prototipe', 'Desain ulang', 'Pemeliharaan'],
    from: '#8a2d12',
    to: '#e0723a',
  },
]
</script>

<template>
  <div id="profil" class="pg on">
    <PageHero
      crumb="Profil Perusahaan"
      title="Profil"
      accent="Perusahaan"
      lead="Siapa Nganjuk Digital Preneur, apa yang kami tuju, dan nilai yang kami pegang."
      :sections="profileSections"
    />

    <!-- SIAPA KAMI -->
    <section id="p-siapa" class="sec">
      <div class="w">
        <div class="pfl-about">
          <div class="rv" v-reveal>
            <span class="pfl-eyebrow">Tentang kami</span>
            <h2>Siapa kami</h2>
            <p class="pfl-text">
              Kami berawal dari sekelompok anak muda Nganjuk yang ingin berkarya lewat teknologi. Kini
              kami mengerjakan pengembangan software secara menyeluruh, dari website dan aplikasi
              mobile sampai sistem informasi sesuai kebutuhan klien.
            </p>
            <ul class="pfl-stats">
              <li v-for="s in stats" :key="s.label">
                <strong>{{ s.value }}</strong>
                <span>{{ s.label }}</span>
              </li>
            </ul>
          </div>

          <div class="pfl-brand rv" v-reveal style="--d: 100ms">
            <div class="pfl-brand-logo"><LogoMark /></div>
            <b>Tim muda Nganjuk</b>
            <p>Berkarya lewat teknologi untuk kebutuhan nyata.</p>
            <div class="pfl-brand-pills">
              <a
                v-for="p in projects"
                :key="p.name"
                :href="'#portofolio/' + slugify(p.name)"
              >{{ p.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUK KAMI -->
    <section class="sec pfl-prod-sec">
      <div class="w">
        <div class="pfl-head rv" v-reveal>
          <h2>Produk kami</h2>
          <a class="pfl-all" href="#portofolio">Lihat semua portofolio <span aria-hidden="true">&rarr;</span></a>
        </div>
        <div class="pfl-prod">
          <a
            v-for="(p, i) in projects"
            :key="p.name"
            class="pfl-prod-card rv"
            v-reveal
            :style="delay(i)"
            :href="'#portofolio/' + slugify(p.name)"
          >
            <span class="pfl-prod-thumb" :style="{ '--g1': p.from, '--g2': p.to }">
              <img v-if="p.logo" :src="p.logo" :alt="'Logo ' + p.name" />
              <template v-else>{{ p.initial }}</template>
            </span>
            <span class="pfl-prod-info">
              <b>{{ p.name }}</b>
              <small>{{ p.tags.join(' · ') }}</small>
            </span>
            <span class="pfl-prod-arr" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- VISI & MISI -->
    <section id="p-visi" class="sec">
      <div class="w">
        <div class="pfl-vm rv" v-reveal>
          <div class="pfl-vision">
            <span class="pfl-badge">Visi</span>
            <p class="pfl-quote">Menjadi tim pengembang software muda yang dipercaya di Nganjuk dan sekitarnya.</p>
          </div>
          <div class="pfl-mission">
            <span class="pfl-badge">Misi</span>
            <ul>
              <li v-for="m in missions" :key="m">
                <span class="pfl-ck" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>
                <span>{{ m }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- BIDANG -->
    <section id="p-fokus" class="sec" style="padding-top: 0">
      <div class="w">
        <div class="pfl-title rv" v-reveal>
          <h2>Bidang yang kami kerjakan</h2>
          <p>Kami mengerjakan pengembangan software dari awal sampai jadi, mulai dari website sampai sistem yang kompleks.</p>
        </div>
        <div class="pfl-focus">
          <article
            v-for="(f, i) in devAreas"
            :key="f.title"
            class="pfl-fcard rv"
            v-reveal
            :style="delay(i)"
          >
            <div class="pfl-fhead" :style="{ '--g1': f.from, '--g2': f.to }">
              <span class="pfl-fic">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="pfl-fbody">
              <h3>{{ f.title }}</h3>
              <p>{{ f.text }}</p>
              <small class="pfl-fcap">Contoh pekerjaan</small>
              <div class="pfl-ftags">
                <span v-for="t in f.items" :key="t" class="tag">{{ t }}</span>
              </div>
            </div>
          </article>
        </div>

        <div class="pfl-more rv" v-reveal>
          <p>Kebutuhan Anda belum ada di daftar? Ceritakan saja, kami bantu carikan solusinya.</p>
          <a class="btn bp" href="#kontak">Konsultasi sekarang</a>
        </div>
      </div>
    </section>

    <!-- NILAI -->
    <section id="p-nilai" class="sec alt">
      <div class="w">
        <div class="pfl-title rv" v-reveal>
          <h2>Nilai yang kami pegang</h2>
          <p>Pegangan kami dalam bekerja, dari obrolan pertama sampai proyek diserahkan.</p>
        </div>
        <div class="pfl-values">
          <div
            v-for="(v, i) in values"
            :key="v.title"
            class="pfl-val rv"
            v-reveal
            :style="delay(i)"
          >
            <span class="pfl-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <b>{{ v.title }}</b>
              <p>{{ v.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TIM -->
    <section id="p-tim" class="sec">
      <div class="w">
        <div class="pfl-title rv" v-reveal>
          <h2>Tim di balik proyek</h2>
          <p>Setiap proyek dikerjakan lintas bagian.</p>
        </div>
        <div class="pfl-team">
          <div
            v-for="(g, i) in teamGroups"
            :key="g.title"
            class="pfl-tcard rv"
            v-reveal
            :style="delay(i)"
          >
            <div class="pfl-avatar">{{ g.badge }}</div>
            <h3>{{ g.title }}</h3>
            <p>{{ g.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* ---------- Judul umum ---------- */
.pfl-eyebrow,
.pfl-badge {
  display: inline-block;
  margin-bottom: 12px;
  padding: 5px 14px;
  border-radius: 999px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.pfl-title {
  max-width: 640px;
  margin: 0 auto 36px;
  text-align: center;
}
.pfl-title h2 {
  margin: 0 0 10px;
}
.pfl-title p {
  margin: 0;
  line-height: 1.7;
  color: #4a5270;
}

/* ---------- Siapa kami ---------- */
.pfl-about {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 48px;
  align-items: center;
}
.pfl-about h2 {
  margin: 0 0 14px;
}
.pfl-text {
  margin: 0 0 26px;
  font-size: 17px;
  line-height: 1.8;
  color: #4a5270;
}
.pfl-stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.pfl-stats li {
  padding: 16px 18px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
}
.pfl-stats strong {
  display: block;
  margin-bottom: 4px;
  font-size: 20px;
  color: #1d3fd6;
}
.pfl-stats span {
  font-size: 13px;
  line-height: 1.4;
  color: #4a5270;
}

.pfl-brand {
  position: relative;
  overflow: hidden;
  padding: 40px 32px;
  border-radius: 28px;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #080f33, #1d3fd6);
  box-shadow: 0 28px 70px rgba(29, 63, 214, 0.25);
}
.pfl-brand::before {
  content: '';
  position: absolute;
  width: 320px;
  height: 320px;
  right: -100px;
  top: -130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 177, 245, 0.4), transparent 65%);
  pointer-events: none;
}
.pfl-brand > * {
  position: relative;
}
.pfl-brand-logo {
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.06);
}
.pfl-brand b {
  display: block;
  margin-bottom: 6px;
  font-size: 20px;
}
.pfl-brand p {
  margin: 0 0 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}
.pfl-brand-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.pfl-brand-pills a {
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.24);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.pfl-brand-pills a:hover {
  background: #fff;
  color: #1d3fd6;
}

/* ---------- Produk kami ---------- */
.pfl-prod-sec {
  padding-top: 0;
}
.pfl-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
}
.pfl-head h2 {
  margin: 0;
}
.pfl-all {
  font-weight: 700;
  color: #1d3fd6;
  text-decoration: none;
}
.pfl-all span {
  display: inline-block;
  transition: transform 0.2s;
}
.pfl-all:hover span {
  transform: translateX(4px);
}
.pfl-prod {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.pfl-prod-card {
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
.pfl-prod-card:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 16px 34px rgba(29, 63, 214, 0.12);
}
.pfl-prod-thumb {
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
.pfl-prod-thumb img {
  width: 80%;
  height: auto;
}
.pfl-prod-info {
  flex: 1;
  display: grid;
  gap: 2px;
}
.pfl-prod-info b {
  font-size: 16px;
}
.pfl-prod-info small {
  font-size: 13px;
  color: #4a5270;
}
.pfl-prod-arr {
  font-size: 20px;
  font-weight: 700;
  color: #1d3fd6;
  transition: transform 0.2s;
}
.pfl-prod-card:hover .pfl-prod-arr {
  transform: translateX(4px);
}

/* ---------- Visi & misi ---------- */
.pfl-vm {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  overflow: hidden;
  border-radius: 32px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 24px 60px rgba(8, 15, 51, 0.1);
}
.pfl-vision {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 44px;
  color: #fff;
  background: linear-gradient(135deg, #080f33, #1d3fd6);
}
.pfl-vision::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  left: -90px;
  bottom: -130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 177, 245, 0.35), transparent 65%);
  pointer-events: none;
}
.pfl-vision > * {
  position: relative;
}
.pfl-vision .pfl-badge {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.24);
}
.pfl-quote {
  margin: 0;
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 700;
  line-height: 1.35;
}
.pfl-mission {
  padding: 48px 44px;
}
.pfl-mission ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.pfl-mission li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  line-height: 1.65;
  color: #4a5270;
}
.pfl-ck {
  flex: none;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  margin-top: 1px;
  border-radius: 50%;
  background: #1d3fd6;
  color: #fff;
}

/* ---------- Bidang ---------- */
.pfl-focus {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.pfl-fcard {
  overflow: hidden;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.pfl-fcard:hover {
  transform: translateY(-5px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 22px 46px rgba(29, 63, 214, 0.14);
}
.pfl-fhead {
  display: grid;
  place-items: center;
  height: 120px;
  background: linear-gradient(135deg, var(--g1), var(--g2));
}
.pfl-fic {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: #fff;
  font-size: 22px;
  font-weight: 800;
}
.pfl-fbody {
  padding: 22px 24px 26px;
}
.pfl-fbody h3 {
  margin: 0 0 8px;
}
.pfl-fbody p {
  margin: 0 0 16px;
  line-height: 1.7;
  color: #4a5270;
}
.pfl-fcap {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #8089a6;
}

.pfl-more {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 28px;
  padding: 22px 28px;
  border-radius: 22px;
  background: #eef3ff;
  border: 1px dashed rgba(29, 63, 214, 0.35);
}
.pfl-more p {
  margin: 0;
  font-weight: 600;
  line-height: 1.6;
  color: #080f33;
}

/* ---------- Nilai ---------- */
.pfl-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
.pfl-val {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 22px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.pfl-val:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 16px 34px rgba(29, 63, 214, 0.12);
}
.pfl-num {
  flex: none;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 14px;
  font-weight: 800;
}
.pfl-val b {
  display: block;
  margin-bottom: 5px;
  font-size: 17px;
}
.pfl-val p {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.7;
  color: #4a5270;
}

/* ---------- Tim ---------- */
.pfl-team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.pfl-tcard {
  padding: 30px 26px;
  border-radius: 24px;
  text-align: center;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.pfl-tcard:hover {
  transform: translateY(-5px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 22px 46px rgba(29, 63, 214, 0.14);
}
.pfl-avatar {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1d3fd6, #14b1f5);
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  box-shadow: 0 0 0 8px #eef3ff;
}
  .pfl-tcard {
    padding: 16px 6px 14px;          /* padding samping lebih tipis */
    border-radius: 16px;
    min-width: 0;                    /* kartu boleh menyusut sesuai kolom */
  }
    .pfl-tcard h3 {
    font-size: 10px;
    line-height: 1.3;
    margin-bottom: 4px;
    letter-spacing: -0.2px;          /* huruf sedikit dirapatkan */
    overflow-wrap: normal;           /* kata tidak dipecah lagi */
  }

/* ---------- Responsif ---------- */
@media (max-width: 900px) {
  .pfl-about {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .pfl-vm {
    grid-template-columns: 1fr;
  }
  .pfl-vision,
  .pfl-mission {
    padding: 34px 28px;
  }
}
@media (max-width: 560px) {
  .pfl-stats {
    grid-template-columns: 1fr;
  }
  .pfl-brand {
    padding: 32px 22px;
  }
  .pfl-vision,
  .pfl-mission {
    padding: 28px 22px;
  }
  .pfl-val {
    padding: 18px;
  }
  .pfl-more {
    padding: 20px;
  }

  /* ===== kartu bidang: 2 kolom ===== */
  .pfl-focus {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    align-items: stretch;
  }
  .pfl-fcard {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
  }
  .pfl-fhead {
    height: 60px;
  }
  .pfl-fic {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-size: 14px;
  }
  .pfl-fbody {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 14px 12px 16px;
  }
  .pfl-fbody h3 {
    font-size: 15px;
    line-height: 1.3;
    min-height: 2.6em;
    margin-bottom: 6px;
  }
  .pfl-fbody p {
    font-size: 12.5px;
    line-height: 1.55;
    margin-bottom: 12px;
  }
  .pfl-fcap {
    margin-top: auto;
    font-size: 10px;
    margin-bottom: 6px;
  }
  .pfl-ftags {
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 2px;
  }
  .pfl-ftags::-webkit-scrollbar {
    display: none;
  }
  .pfl-ftags .tag {
    flex: none;
    font-size: 10.5px;
    line-height: 1.2;
    padding: 4px 8px;
    white-space: nowrap;
    scroll-snap-align: start;
  }

  /* ===== kartu tim: 3 kolom ===== */
  .pfl-team {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }
  .pfl-tcard {
    padding: 14px 3px 12px;
    border-radius: 14px;
    min-width: 0;
    overflow: hidden;
  }
  .pfl-avatar {
    width: 44px;
    height: 44px;
    margin-bottom: 10px;
    font-size: 14px;
    box-shadow: 0 0 0 5px #eef3ff;
  }
  .pfl-tcard h3 {
    font-size: 10px;
    line-height: 1.3;
    margin-bottom: 4px;
    letter-spacing: -0.2px;
    overflow-wrap: normal;
  }
  .pfl-tcard p {
    font-size: 11px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }
}
</style>