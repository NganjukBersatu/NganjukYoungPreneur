<script setup lang="ts">
import { projects } from '../data/projects'
import { slugify } from '../utils/slug'

// Semua proyek di data/projects.ts otomatis ikut tampil.
// Setiap ikon adalah tautan ke detail proyeknya (ditangani App.vue lewat href "#portofolio/slug").
const items = projects.map((p) => ({ p, href: '#portofolio/' + slugify(p.name) }))
</script>

<template>
  <div class="hp" role="group" aria-label="Proyek yang sudah kami kerjakan">
    <ul class="hp-grid">
      <li v-for="i in items" :key="i.p.name">
        <a class="hp-item" :href="i.href" :aria-label="'Lihat proyek ' + i.p.name">
          <span class="hp-tile">
            <span class="hp-icon" :style="{ '--g1': i.p.from }">
              <img v-if="i.p.logo" :src="i.p.logo" alt="" decoding="async" />
              <span v-else class="hp-initial">{{ i.p.initial }}</span>
            </span>
          </span>
          <span class="hp-name">{{ i.p.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.hp {
  position: relative;
  width: min(100%, 460px);
  margin-inline: auto;
  padding: 36px 0 12px;
}

/* Cincin elips tipis di belakang ikon */
.hp::before {
  content: '';
  position: absolute;
  left: -4%;
  right: -4%;
  top: 24%;
  bottom: 6%;
  border: 2px solid rgba(125, 200, 255, 0.5);
  border-radius: 50%;
  transform: rotate(-8deg);
  box-shadow: 0 0 28px rgba(20, 177, 245, 0.3), inset 0 0 28px rgba(20, 177, 245, 0.12);
  pointer-events: none;
}
/* Cahaya biru lembut di belakang */
.hp::after {
  content: '';
  position: absolute;
  inset: 12% 4%;
  background: radial-gradient(closest-side, rgba(29, 63, 214, 0.5), transparent);
  filter: blur(12px);
  pointer-events: none;
}

/* 3 ikon per baris, baris terakhir otomatis di tengah */
.hp-grid {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.hp-grid > li {
  width: calc((100% - 32px) / 3);
}

/* Posisi bertingkat dan sedikit miring (urutan sesuai data/projects.ts) */
.hp-grid > li:nth-child(1) { --r: -7deg; --y: 14px; }
.hp-grid > li:nth-child(2) { --r: 3deg;  --y: -8px; }
.hp-grid > li:nth-child(3) { --r: 7deg;  --y: 14px; }
.hp-grid > li:nth-child(4) { --r: -4deg; --y: 0px; }
.hp-grid > li:nth-child(5) { --r: 5deg;  --y: 0px; }

.hp-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #fff;
  transform: translateY(var(--y, 0px));
  transition: transform 200ms;
}

/* Bingkai kaca */
.hp-tile {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 24%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 14px 30px rgba(3, 10, 60, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: rotate(var(--r, 0deg));
  transition: transform 200ms;
}

/* Ikon berwarna di dalam bingkai */
.hp-icon {
  position: absolute;
  inset: 14%;
  border-radius: 22%;
  overflow: hidden;
  background: var(--g1);
}
.hp-icon img {
  position: absolute;
  inset: 8%;
  width: 84%;
  height: 84%;
  max-width: none;
  object-fit: contain;
}
.hp-initial {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  color: #fff;
}

.hp-name {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  text-shadow: 0 1px 6px rgba(3, 10, 60, 0.6);
  overflow-wrap: anywhere;
}

@media (hover: hover) {
  .hp-item:hover {
    transform: translateY(calc(var(--y, 0px) - 6px));
  }
  .hp-item:hover .hp-tile {
    transform: rotate(0deg) scale(1.04);
  }
}
.hp-item:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
  border-radius: 12px;
}

@media (max-width: 400px) {
  .hp-grid {
    gap: 18px 10px;
  }
  .hp-grid > li {
    width: calc((100% - 20px) / 3);
  }
  .hp-name {
    font-size: 12px;
  }
}
</style>