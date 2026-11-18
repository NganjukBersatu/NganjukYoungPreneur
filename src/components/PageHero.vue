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