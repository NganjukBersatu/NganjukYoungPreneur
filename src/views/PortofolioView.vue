<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '../data/projects'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import ProjectCard from '../components/ProjectCard.vue'
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
            <img :src="fomoLogo" alt="Logo FOMO" />
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

        <div class="g3" style="margin-top: 32px">
          <ProjectCard
            v-for="(p, i) in projects"
            v-show="visible(p.tags)"
            :key="p.name"
            :project="p"
            :index="i"
          />
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
  border-radius: 28px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  box-shadow: 0 24px 60px rgba(8, 15, 51, 0.1);
}
.pf-feat-logo {
  display: grid;
  place-items: center;
  padding: 36px;
  background: linear-gradient(135deg, #123f2f, #23624a);
}
.pf-feat-logo img {
  width: 100%;
  max-width: 230px;
  height: auto;
  object-fit: contain;
}
.pf-feat-body {
  padding: 36px 40px;
}
.pf-badge {
  display: inline-block;
  margin-bottom: 12px;
  padding: 5px 14px;
  border-radius: 999px;
  background: #e6f4ec;
  color: #1c5a41;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pf-feat-body h2 {
  margin: 0 0 10px;
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
  gap: 10px;
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
  margin-bottom: 18px;
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

.pf-empty {
  margin-top: 32px;
  padding: 28px;
  text-align: center;
  border-radius: 18px;
  border: 1px dashed rgba(29, 63, 214, 0.3);
  color: #4a5270;
}

@media (max-width: 820px) {
  .pf-feat {
    grid-template-columns: 1fr;
  }
  .pf-feat-logo {
    padding: 28px;
  }
  .pf-feat-logo img {
    max-width: 180px;
  }
  .pf-feat-body {
    padding: 24px 22px 28px;
  }
}
</style>