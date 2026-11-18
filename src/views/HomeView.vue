<script setup lang="ts">
import { computed } from 'vue'
import { serviceItemIcons, services } from '../data/content'
import { projects } from '../data/projects'
import { delay } from '../utils/delay'
import { slugify } from '../utils/slug'
import AppIcon from '../components/AppIcon.vue'
import HeroIllustration from '../components/HeroIllustration.vue'

const main = services[0]

// Penjelasan satu kalimat (kunci = slug nama layanan di content.ts)
const serviceText: Record<string, string> = {
  'website-dan-sistem-informasi': 'Website profil, toko online, sampai sistem informasi kantor.',
  'aplikasi-mobile': 'Aplikasi Android dan iOS, seperti kasir, pesan antar, dan absensi.',
  'desain-ui-ux': 'Rancangan tampilan dan prototipe yang rapi dan mudah dipahami.',
  'pemeliharaan-berkala': 'Perbaikan dan penambahan fitur agar aplikasi tetap lancar.',
}

const serviceCards = computed(() =>
  main.items.map((name, i) => ({
    name,
    slug: slugify(name),
    icon: serviceItemIcons[i],
    text: serviceText[slugify(name)] ?? 'Lihat penjelasan lengkap layanan ini.',
  })),
)

const featured = computed(() => projects.find((p) => p.name === 'Fomo'))
const others = computed(() => projects.filter((p) => p.name !== 'Fomo'))
</script>

<template>
  <div id="beranda" class="pg on">
    <!-- HERO (tidak diubah) -->
    <section class="dk hero">
      <div class="w hg">
        <div>
          <h1 class="rv" v-reveal>Nganjuk<br /><span>Digital Preneur</span></h1>
          <p class="lead rv" v-reveal style="--d: 150ms">Kami membangun solusi digital yang membantu usaha dan komunitas di Nganjuk tumbuh lebih cepat.</p>
          <div class="cta rv" v-reveal style="--d: 300ms">
            <a class="btn ba" href="#portofolio">Lihat portofolio</a>
            <a class="btn bo" href="#kontak">Hubungi kami</a>
          </div>
          <div class="chips rv" v-reveal style="--d: 450ms"><span class="chip">All software development</span></div>
        </div>
        <div class="rv hv" v-reveal style="--d: 250ms">
          <div class="hglow"></div>
          <HeroIllustration />
        </div>
      </div>
    </section>

    <!-- LAYANAN -->
    <section class="sec">
      <div class="w">
        <div class="hm-title rv" v-reveal>
          <span class="hm-eyebrow">Layanan</span>
          <h2>Apa yang bisa kami bantu</h2>
          <p>Semua kebutuhan pengembangan perangkat lunak, dikerjakan oleh tim muda Nganjuk.</p>
        </div>

        <div class="hm-services">
          <!-- Pembungkus membawa animasi masuk, kartu di dalamnya membawa efek hover -->
          <div
            v-for="(s, i) in serviceCards"
            :key="s.slug"
            class="hm-cell rv"
            v-reveal
            :style="delay(i)"
          >
            <a class="hm-svc" :href="'#layanan/' + s.slug">
              <span class="hm-svc-ic"><AppIcon :name="s.icon" /></span>
              <b>{{ s.name }}</b>
              <p>{{ s.text }}</p>
              <span class="hm-go">Lihat detail <span aria-hidden="true">&rarr;</span></span>
            </a>
          </div>
        </div>

        <div class="hm-more rv" v-reveal style="--d: 200ms">
          <a class="hm-link" href="#layanan">Lihat semua layanan <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </section>

    <!-- PORTOFOLIO -->
    <section class="sec alt">
      <div class="w">
        <div class="hm-title rv" v-reveal>
          <span class="hm-eyebrow">Portofolio</span>
          <h2>Proyek yang sudah dipakai</h2>
          <p>Hasil kerja nyata, bukan sekadar rancangan.</p>
        </div>

        <div v-if="featured" class="rv" v-reveal style="--d: 100ms">
          <a
            class="hm-feat"
            :href="'#portofolio/' + slugify(featured.name)"
            :style="{ '--g1': featured.from, '--g2': featured.to }"
          >
            <div class="hm-feat-text">
              <span class="hm-feat-badge">Proyek unggulan</span>
              <h3>Aplikasi kasir untuk FOMO</h3>
              <p>Pesanan pelanggan dicatat langsung di aplikasi mobile, dengan tampilan sederhana yang mudah dipelajari kasir.</p>
              <span class="hm-feat-go">Baca selengkapnya <span aria-hidden="true">&rarr;</span></span>
            </div>
            <div class="hm-feat-logo">
              <img v-if="featured.logo" :src="featured.logo" alt="Logo FOMO" />
              <span v-else>{{ featured.initial }}</span>
            </div>
          </a>
        </div>

        <div class="hm-more hm-more-row rv" v-reveal style="--d: 200ms">
          <span v-if="others.length" class="hm-others">
            Juga:
            <a v-for="o in others" :key="o.name" :href="'#portofolio/' + slugify(o.name)">{{ o.name }}</a>
          </span>
          <a class="hm-link" href="#portofolio">Lihat semua portofolio <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </section>

    <!-- PROFIL -->
    <section class="sec">
      <div class="w">
        <div class="hm-about rv" v-reveal>
          <div>
            <span class="hm-eyebrow">Tentang kami</span>
            <h2>Tim muda Nganjuk yang berkarya lewat teknologi</h2>
            <p>Kami berawal dari sekelompok anak muda Nganjuk yang ingin berkarya lewat teknologi. Kenali siapa kami, apa yang kami tuju, dan siapa saja yang mengerjakan proyek Anda.</p>
          </div>
          <a class="btn bp hm-btn" href="#profil">Kenali kami</a>
        </div>
      </div>
    </section>

    <!-- AJAKAN AKHIR -->
    <section class="sec" style="padding-top: 0">
      <div class="w">
        <div class="hm-final rv" v-reveal>
          <div>
            <h2>Punya kebutuhan sendiri?</h2>
            <p>Ceritakan kebutuhan Anda, kami bantu mencari solusinya.</p>
          </div>
          <a class="btn ba hm-btn" href="#kontak">Hubungi kami</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- Judul bagian ---------- */
.hm-title {
  max-width: 640px;
  margin: 0 auto 36px;
  text-align: center;
}
.hm-title h2 {
  margin: 0 0 10px;
}
.hm-title p {
  margin: 0;
  line-height: 1.7;
  color: #4a5270;
}
.hm-eyebrow {
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

/* ---------- Link "lihat semua" ---------- */
.hm-more {
  margin-top: 28px;
  text-align: center;
}
.hm-more-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  text-align: left;
}
.hm-link {
  font-weight: 700;
  color: #1d3fd6;
  text-decoration: none;
}
.hm-link span,
.hm-go span,
.hm-feat-go span {
  display: inline-block;
  transition: transform 0.2s;
}
.hm-others {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: #4a5270;
}
.hm-others a {
  padding: 5px 14px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.18);
  color: #1d3fd6;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

/* ---------- Layanan ---------- */
.hm-services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.hm-cell {
  display: flex;
}
.hm-svc {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 26px 24px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 2px 10px rgba(8, 15, 51, 0.04);
  color: inherit;
  text-decoration: none;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.hm-svc-ic {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  border-radius: 16px;
  background: #eef3ff;
  color: #1d3fd6;
  transition: background 0.2s, color 0.2s, transform 0.25s;
}
.hm-svc b {
  margin-bottom: 8px;
  font-size: 18px;
}
.hm-svc p {
  flex: 1;
  margin: 0 0 16px;
  font-size: 14.5px;
  line-height: 1.7;
  color: #4a5270;
}
.hm-go {
  font-size: 14px;
  font-weight: 700;
  color: #1d3fd6;
}
.hm-svc:focus-visible,
.hm-feat:focus-visible {
  outline: 3px solid rgba(29, 63, 214, 0.4);
  outline-offset: 3px;
}

/* ---------- Proyek unggulan ---------- */
.hm-feat {
  position: relative;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;
  gap: 24px;
  padding: 40px 48px;
  overflow: hidden;
  border-radius: 28px;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(135deg, var(--g1), var(--g2));
  box-shadow: 0 24px 60px rgba(8, 15, 51, 0.2);
  transition: transform 0.25s, box-shadow 0.25s;
}
.hm-feat::before {
  content: '';
  position: absolute;
  width: 380px;
  height: 380px;
  right: -90px;
  top: -140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.16), transparent 65%);
  pointer-events: none;
}
.hm-feat > * {
  position: relative;
}
.hm-feat-badge {
  display: inline-block;
  margin-bottom: 12px;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.hm-feat h3 {
  margin: 0 0 10px;
  font-size: clamp(22px, 3vw, 30px);
  color: #fff;
}
.hm-feat p {
  margin: 0 0 18px;
  max-width: 460px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}
.hm-feat-go {
  font-weight: 700;
}
.hm-feat-logo {
  display: grid;
  place-items: center;
  justify-self: center;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 0 0 14px rgba(255, 255, 255, 0.06), 0 24px 50px rgba(0, 0, 0, 0.22);
  font-size: 80px;
  font-weight: 800;
  animation: hm-float 5s ease-in-out infinite, hm-ring 3.2s ease-in-out infinite;
}
.hm-feat-logo img {
  width: 82%;
  height: auto;
  object-fit: contain;
}

@keyframes hm-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes hm-ring {
  0%,
  100% {
    box-shadow: 0 0 0 14px rgba(255, 255, 255, 0.06), 0 24px 50px rgba(0, 0, 0, 0.22);
  }
  50% {
    box-shadow: 0 0 0 22px rgba(255, 255, 255, 0.1), 0 24px 50px rgba(0, 0, 0, 0.22);
  }
}

/* ---------- Profil ---------- */
.hm-about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
  padding: 40px 48px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 20px 50px rgba(8, 15, 51, 0.08);
}
.hm-about > div {
  flex: 1 1 420px;
  max-width: 680px;
}
.hm-about h2 {
  margin: 0 0 12px;
}
.hm-about p {
  margin: 0;
  line-height: 1.8;
  color: #4a5270;
}

/* ---------- Ajakan akhir ---------- */
.hm-final {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 36px 44px;
  border-radius: 28px;
  background: #eef3ff;
  border: 1px dashed rgba(29, 63, 214, 0.35);
}
.hm-final h2 {
  margin: 0 0 6px;
}
.hm-final p {
  margin: 0;
  color: #4a5270;
}

/* ---------- Hover: hanya di perangkat yang punya mouse ---------- */
@media (hover: hover) {
  .hm-svc:hover {
    transform: translateY(-5px);
    border-color: rgba(29, 63, 214, 0.35);
    box-shadow: 0 22px 46px rgba(29, 63, 214, 0.14);
  }
  .hm-svc:hover .hm-svc-ic {
    background: #1d3fd6;
    color: #fff;
    transform: rotate(-6deg) scale(1.06);
  }
  .hm-svc:hover .hm-go span,
  .hm-link:hover span {
    transform: translateX(4px);
  }
  .hm-feat:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 70px rgba(8, 15, 51, 0.28);
  }
  .hm-feat:hover .hm-feat-go span {
    transform: translateX(5px);
  }
  .hm-others a:hover {
    background: #1d3fd6;
    color: #fff;
  }
}

/* ---------- Responsif ---------- */
@media (max-width: 1100px) {
  .hm-services {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .hm-feat {
    grid-template-columns: 1fr;
    padding: 34px 28px;
  }
  .hm-feat-logo {
    order: -1;
    width: 140px;
    height: 140px;
    font-size: 60px;
  }
  .hm-about {
    padding: 32px 28px;
  }
}
@media (max-width: 560px) {
  .hm-title {
    margin-bottom: 28px;
  }
  .hm-services {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .hm-svc {
    padding: 22px 20px;
  }
  .hm-feat {
    padding: 28px 20px;
    border-radius: 24px;
  }
  .hm-about,
  .hm-final {
    padding: 26px 22px;
    border-radius: 24px;
  }
  .hm-about > div {
    flex-basis: 100%;
  }
  .hm-btn {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  .hm-more-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* ---------- Kurangi gerakan ---------- */
@media (prefers-reduced-motion: reduce) {
  .hm-feat-logo {
    animation: none;
  }
  .hm-svc,
  .hm-feat,
  .hm-svc-ic,
  .hm-link span,
  .hm-go span,
  .hm-feat-go span {
    transition: none;
  }
}
</style>