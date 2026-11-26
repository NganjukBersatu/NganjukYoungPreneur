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
       <div class="pfl-panel">
        <div class="pfl-head rv" v-reveal>
          <div>
            <span class="pfl-panel-eyebrow">Hasil kerja kami</span>
            <h2>Produk kami</h2>
          </div>
          <a class="pfl-all" href="#portofolio">Lihat semua portofolio</a>
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
              <img loading="lazy" decoding="async" v-if="p.logo" :src="p.logo" :alt="'Logo ' + p.name" />
              <template v-else>{{ p.initial }}</template>
            </span>
            <span class="pfl-prod-info">
              <b>{{ p.name }}</b>
              <small>{{ p.tags.join(' · ') }}</small>
            </span>
            <span class="pfl-prod-btn" aria-hidden="true">Lihat</span>
          </a>
        </div>
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
  padding: 6px 16px;
  border-radius: 999px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.pfl-title {
  max-width: 640px;
  margin: 0 auto 40px;
  text-align: center;
}
.pfl-title h2 {
  margin: 0 0 12px;
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
  margin: 0 0 16px;
}
.pfl-text {
  margin: 0 0 24px;
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
  gap: 16px;
}
.pfl-stats li {
  padding: 16px 20px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: var(--sh-1);
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
  border-radius: 12px;
  text-align: center;
  color: #fff;
  background: #080f33;
  box-shadow: var(--sh-1);
}
.pfl-brand::before {
  content: '';
  position: absolute;
  width: 320px;
  height: 320px;
  right: -100px;
  top: -130px;
  border-radius: 50%;
  background: none;
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
  margin: 0 auto 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: none;
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
  transition: background 150ms, color 150ms;
}
.pfl-brand-pills a:hover {
  background: #fff;
  color: #1d3fd6;
}

/* ---------- Produk kami ---------- */
.pfl-prod-sec {
  padding-top: 0;
}
.pfl-panel {
  position: relative;
  overflow: hidden;
  padding: 40px 40px 48px;
  border-radius: 12px;
  color: #fff;
  background: #080f33;
  box-shadow: var(--sh-1);
}
.pfl-panel::before {
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
.pfl-panel > * {
  position: relative;
}
.pfl-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}
.pfl-head h2 {
  margin: 0;
  color: #fff;
}
.pfl-panel-eyebrow {
  display: inline-block;
  margin-bottom: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.pfl-all {
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 6px;
  background: var(--ac, #14b1f5);
  color: #080f33;
  font-weight: 700;
  text-decoration: none;
  box-shadow: var(--sh-1);
  transition: transform 150ms, background 150ms;
}
.pfl-all:hover {
  transform: translateY(-2px);
  background: #5ccbff;
}
.pfl-prod {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 16px;
}
.pfl-prod-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 16px 16px 16px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0.9);
  color: #080f33;
  text-decoration: none;
  box-shadow: var(--sh-1);
  transition: transform 150ms, box-shadow 150ms;
}
.pfl-prod-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sh-2);
}
.pfl-prod-thumb {
  flex: none;
  display: grid;
  place-items: center;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background: var(--g1);
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  overflow: hidden;
}
.pfl-prod-thumb img {
  width: 78%;
  height: 78%;
  object-fit: contain;
}
.pfl-prod-info {
  flex: 1;
  min-width: 0;
  display: grid;
  gap: 2px;
}
.pfl-prod-info b {
  font-size: 17px;
}
.pfl-prod-info small {
  font-size: 13px;
  color: #4a5270;
}
.pfl-prod-btn {
  flex: none;
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 6px;
  background: #eef3ff;
  border: 1px solid rgba(29, 63, 214, 0.25);
  color: #1d3fd6;
  font-size: 13px;
  font-weight: 700;
  transition: background 150ms, color 150ms;
}
.pfl-prod-card:hover .pfl-prod-btn {
  background: #1d3fd6;
  border-color: #1d3fd6;
  color: #fff;
}
@media (max-width: 560px) {
  .pfl-panel {
    padding: 24px 16px 24px;
    border-radius: 12px;
  }
  .pfl-head {
    align-items: stretch;     
    flex-direction: column;
    gap: 20px;              
    margin-bottom: 20px;
  }
  .pfl-all {
    justify-content: center;  
    width: 100%;      
    height: 48px;
    padding: 0 16px;
    font-size: 15px;
  }
  .pfl-prod {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .pfl-prod-thumb {
    width: 58px;
    height: 58px;
    border-radius: 8px;
  }
}

/* ---------- Visi & misi ---------- */
.pfl-vm {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: var(--sh-1);
}
.pfl-vision {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 48px;
  color: #fff;
  background: #080f33;
}
.pfl-vision::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  left: -90px;
  bottom: -130px;
  border-radius: 50%;
  background: none;
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
  padding: 48px 48px;
}
.pfl-mission ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
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
  margin-top: 2px;
  border-radius: 50%;
  background: #1d3fd6;
  color: #fff;
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
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: var(--sh-1);
  transition: transform 150ms, border-color 150ms, box-shadow 150ms;
}
.pfl-val:hover {
  transform: translateY(-3px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: var(--sh-2);
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
  font-weight: 700;
}
.pfl-val b {
  display: block;
  margin-bottom: 6px;
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
  padding: 32px 24px;
  border-radius: 8px;
  text-align: center;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: var(--sh-1);
  transition: transform 240ms, box-shadow 240ms, border-color 240ms;
}
.pfl-tcard:hover {
  transform: translateY(-5px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: var(--sh-2);
}
.pfl-avatar {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: #1d3fd6;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  box-shadow: none;
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
    padding: 32px 32px;
  }

  /* tim: 3 kartu satu baris di tablet */
  .pfl-team {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .pfl-tcard {
    padding: 24px 16px 24px;
    border-radius: 8px;
    min-width: 0;
  }
  .pfl-tcard h3 {
    font-size: 16px;
  }
  .pfl-tcard p {
    font-size: 13px;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 560px) {
  .pfl-stats {
    grid-template-columns: 1fr;
  }
  .pfl-brand {
    padding: 32px 24px;
  }
  .pfl-vision,
  .pfl-mission {
    padding: 32px 24px;
  }
  .pfl-val {
    padding: 20px;
  }

  /* ===== kartu tim: 3 kolom ===== */
  .pfl-team {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }
  .pfl-tcard {
    padding: 16px 4px 12px;
    border-radius: 8px;
    min-width: 0;
    overflow: hidden;
  }
  .pfl-avatar {
    width: 44px;
    height: 44px;
    margin-bottom: 12px;
    font-size: 14px;
    box-shadow: none;
  }
  .pfl-tcard h3 {
    font-size: 12px;
    line-height: 1.3;
    margin-bottom: 4px;
    letter-spacing: -0.2px;
    overflow-wrap: normal;
  }
  .pfl-tcard p {
    font-size: 12px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }
}

@media (min-width: 641px) and (max-width: 900px) {
  .pfl-values {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .pfl-val {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 12px;
    padding: 20px 16px;
  }
  .pfl-val > div {
    display: contents;
  }
  .pfl-num {
    width: 34px;
    height: 34px;
    font-size: 12px;
  }
  .pfl-val b {
    margin: 0;
    font-size: 14px;
    line-height: 1.25;
  }
  .pfl-val p {
    grid-column: 1 / -1;
    font-size: 13px;
    line-height: 1.6;
  }
}
</style>