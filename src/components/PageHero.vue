<script setup lang="ts">
// Hero halaman dalam. Pola acuan: jejak halaman, judul (kata kedua berwarna), pengantar, tombol bagian (opsional)
defineProps<{
  crumb: string
  title: string
  accent?: string
  lead: string
  sections?: { id: string; label: string }[]
}>()

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <section class="dk pgh">
    <div class="w">
      <p class="bc"><a href="#beranda">Beranda</a> / {{ crumb }}</p>
      <h1>{{ title }}{{ accent ? ' ' : '' }}<span v-if="accent">{{ accent }}</span></h1>
      <p class="lead">{{ lead }}</p>
      <div v-if="sections?.length" class="sn">
        <button v-for="s in sections" :key="s.id" type="button" @click="scrollToId(s.id)">{{ s.label }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 560px) {
  .sn {
    flex-wrap: nowrap;                /* semua kapsul satu baris */
    overflow-x: auto;                 /* bisa digeser ke samping */
    scroll-snap-type: x proximity;    /* berhenti rapi di tiap kapsul */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;            /* sembunyikan scrollbar (Firefox) */
    padding-bottom: 4px;
  }
  .sn::-webkit-scrollbar {
    display: none;                    /* sembunyikan scrollbar (Chrome/Safari) */
  }
  .sn > button {
    flex: none;                       /* kapsul tidak boleh gepeng */
    white-space: nowrap;              /* teks tidak pecah dua baris */
    scroll-snap-align: start;
  }
}
</style>