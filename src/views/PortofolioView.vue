<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '../data/projects'
import { delay } from '../utils/delay'
import { slugify } from '../utils/slug'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import fomoLogo from '../assets/fomo-logo.png'

const tags = computed(() => ['Semua', ...new Set(projects.flatMap((p) => p.tags))])
const active = ref('Semua')

const visible = (tagList: string[]) => active.value === 'Semua' || tagList.includes(active.value)
const count = (t: string) =>
  t === 'Semua' ? projects.length : projects.filter((p) => p.tags.includes(t)).length
const total = computed(() => projects.filter((p) => visible(p.tags)).length)

// Poin singkat FOMO, sesuaikan dengan fitur yang benar-benar ada
const fomoPoints = ['Catat pesanan dengan cepat', 'Total dan pembayaran otomatis', 'Laporan penjualan harian']
</script>

<template>
  <div id="portofolio" class="pg on">
    <PageHero crumb="Portofolio" title="Portofolio" lead="Proyek yang sudah digunakan perusahaan." />

    <!-- Proyek unggulan -->
    <section class="sec" style="padding-bottom: 0">
      <div class="w">
        <div class="pf-feat rv" v-reveal>
          <div class="pf-feat-logo">
            <img loading="lazy" decoding="async" :src="fomoLogo" alt="Logo FOMO" />
          </div>
          <div class="pf-feat-body">
            <span class="pf-badge">Proyek unggulan</span>
            <h2>FOMO</h2>
            <p>
              Aplikasi kasir untuk FOMO (Feed the Panic). Pesanan pelanggan dicatat langsung di
              aplikasi, dengan tampilan hijau tua yang sederhana dan mudah dipelajari kasir.
            </p>
            <ul class="pf-points">
              <li v-for="p in fomoPoints" :key="p">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {{ p }}
              </li>
            </ul>
            <div class="pf-actions">
              <a class="btn ba" href="#portofolio/fomo">Lihat detail FOMO</a>
              <a class="pf-ghost" href="#kontak">Minta demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Semua proyek -->
    <section class="sec">
      <div class="w">
        <div class="pf-head rv" v-reveal>
          <h2>Semua proyek</h2>
          <span class="pf-count">{{ total }} proyek</span>
        </div>

        <div id="flt" class="flt rv" v-reveal>
          <button
            v-for="t in tags"
            :key="t"
            type="button"
            :class="{ on: active === t }"
            @click="active = t"
          >
            {{ t }} <small>({{ count(t) }})</small>
          </button>
        </div>

        <div class="pfl-panel">
  <div class="pfl-prod">
    <a
      v-for="(p, i) in projects"
      v-show="visible(p.tags)"
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

        <p v-if="total === 0" class="pf-empty">Belum ada proyek untuk kategori ini.</p>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* Proyek unggulan */
.pf-feat {
  display: grid;
  grid-template-columns: 340px 1fr;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: var(--sh-1);
}
.pf-feat-logo {
  display: grid;
  place-items: center;
  padding: 40px;
  background: #123f2f;
}
.pf-feat-logo img {
  width: 100%;
  max-width: 230px;
  height: auto;
  object-fit: contain;
}
.pf-feat-body {
  padding: 40px 40px;
}
.pf-badge {
  display: inline-block;
  margin-bottom: 12px;
  padding: 6px 16px;
  border-radius: 999px;
  background: #e6f4ec;
  color: #1c5a41;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pf-feat-body h2 {
  margin: 0 0 12px;
}
.pf-feat-body p {
  margin: 0 0 16px;
  line-height: 1.7;
  color: #4a5270;
}
.pf-points {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: grid;
  gap: 8px;
}
.pf-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 600;
}
.pf-points svg {
  flex: none;
  padding: 4px;
  box-sizing: content-box;
  border-radius: 50%;
  background: #1d3fd6;
  color: #fff;
}
.pf-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.pf-ghost {
  font-weight: 700;
  color: #1d3fd6;
  text-decoration: none;
}
.pf-ghost:hover {
  text-decoration: underline;
}

/* Judul daftar proyek */
.pf-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}
.pf-head h2 {
  margin: 0;
}
.pf-count {
  font-size: 14px;
  font-weight: 700;
  color: #4a5270;
}
.flt small {
  opacity: 0.7;
  font-size: 0.85em;
}
.flt {
  margin-bottom: 24px;
}

@media (max-width: 560px) {
  /* kapsul satu baris, bisa digeser ke samping */
  .flt {
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    margin-inline: -20px;
    padding: 0 20px 4px;
  }
  .flt::-webkit-scrollbar { display: none; }
  .flt button {
    flex: none;
    white-space: nowrap;
  }
}

.pf-empty {
  margin-top: 32px;
  padding: 32px;
  text-align: center;
  border-radius: 8px;
  border: 1px dashed rgba(29, 63, 214, 0.3);
  color: #4a5270;
}

.pf-slider {
  position: relative;
  margin-top: 32px;
}
.pf-arrow {
  display: none;
}

@media (max-width: 820px) {
  .pf-feat {
    grid-template-columns: 1fr;
  }
  .pf-feat-logo {
    padding: 32px;
  }
  .pf-feat-logo img {
    max-width: 180px;
  }
  .pf-feat-body {
    padding: 24px 24px 32px;
  }
}

@media (max-width: 900px) {
  .pf-slider .g3 {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 6px;
  }
  .pf-slider .g3::-webkit-scrollbar {
    display: none;
  }
  .pf-slider .g3 > * {
    flex: none;
    width: calc((100% - 12px) / 2);
    scroll-snap-align: start;
    /* efek naik dari bawah */
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 400ms ease, transform 400ms ease;
  }
  .pf-slider .g3 > .pf-in {
    opacity: 1;
    transform: none;
  }

  .pf-arrow {
    position: absolute;
    top: 74px;
    transform: translateY(-50%);
    z-index: 5;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 0;
    border-radius: 50%;
    background: #fff;
    color: #1d3fd6;
    box-shadow: var(--sh-1);
    cursor: pointer;
  }
  .pf-arrow:active {
    transform: translateY(-50%) scale(0.92);
  }
  .pf-prev { left: 8px; }
  .pf-next { right: 8px; }
}

@media (max-width: 900px) and (prefers-reduced-motion: reduce) {
  .pf-slider .g3 > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* HP: 1 kartu per layar */
@media (max-width: 560px) {
  .pf-slider .g3 > * {
    width: 100%;
  }
}
.pfl-panel {
  position: relative;
  overflow: hidden;
  padding: 32px;
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
.pfl-prod {
  position: relative;
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
    padding: 20px 16px;
    border-radius: 12px;
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
</style>