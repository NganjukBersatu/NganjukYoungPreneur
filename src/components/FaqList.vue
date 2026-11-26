<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ items: { q: string; a: string }[] }>()

// Hanya satu pertanyaan yang terbuka: membuka yang lain otomatis menutup yang sebelumnya
const openIndex = ref<number | null>(0)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <div class="faq">
    <details v-for="(item, i) in items" :key="item.q" class="faq-item rv" v-reveal :open="openIndex === i">
      <summary class="faq-sum" @click.prevent="toggle(i)">
        <span class="faq-num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="faq-q">{{ item.q }}</span>
        <span class="faq-ic" aria-hidden="true"></span>
      </summary>
      <div class="faq-a">
        <p>{{ item.a }}</p>
      </div>
    </details>
  </div>
</template>

<style scoped>
.faq {
  max-width: 800px;
  margin: 32px auto 0;
  display: grid;
  gap: 16px;
}

.faq-item {
  background: #fff;
  border: 1px solid rgba(29, 63, 214, 0.12);
  border-radius: 8px;
  box-shadow: var(--sh-1);
  overflow: hidden;
  transition: border-color 150ms, box-shadow 150ms, background 150ms;
}
.faq-item:hover {
  border-color: rgba(29, 63, 214, 0.35);
}
.faq-item[open] {
  border-color: #1d3fd6;
  box-shadow: var(--sh-1);
}

/* Susunan: [nomor] [pertanyaan .......] [ikon] */
.faq-sum {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 20px 20px;
  cursor: pointer;
  list-style: none;
  user-select: none;
}
.faq-sum::-webkit-details-marker {
  display: none;
}
/* Matikan ikon bawaan dari CSS global agar tidak dobel */
.faq-sum::before,
.faq-sum::after {
  content: none !important;
  display: none !important;
}
.faq-sum:focus-visible {
  outline: 2px solid #1d3fd6;
  outline-offset: -4px;
  border-radius: 8px;
}

.faq-num {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #eef3ff;
  color: #1d3fd6;
  font-size: 13px;
  font-weight: 700;
  transition: background 150ms, color 150ms;
}
.faq-item[open] .faq-num {
  background: #1d3fd6;
  color: #fff;
}

.faq-q {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
}

/* Ikon plus di dalam lingkaran, berubah jadi minus saat dibuka */
.faq-ic {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eef3ff;
  transition: background 150ms, transform 240ms;
}
.faq-ic::before,
.faq-ic::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 2px;
  margin: -2px 0 0 -6px;
  border-radius: 2px;
  background: #1d3fd6;
  transition: transform 240ms, background 150ms;
}
.faq-ic::after {
  transform: rotate(90deg);
}
.faq-item[open] .faq-ic {
  background: #1d3fd6;
}
.faq-item[open] .faq-ic::before,
.faq-item[open] .faq-ic::after {
  background: #fff;
}
.faq-item[open] .faq-ic::after {
  transform: rotate(0);
}

/* Jawaban sejajar dengan teks pertanyaan (melewati kolom nomor) */
.faq-a {
  padding: 0 20px 20px 80px;
}
.faq-a p {
  margin: 0;
  padding-top: 16px;
  border-top: 1px dashed rgba(29, 63, 214, 0.2);
  line-height: 1.7;
  color: #4a5270;
}

@media (max-width: 520px) {
  .faq-sum {
    gap: 12px;
    padding: 16px;
  }
  .faq-num {
    width: 32px;
    height: 32px;
  }
  .faq-q {
    font-size: 15px;
  }
  .faq-a {
    padding: 0 16px 20px 16px;
  }
}
</style>