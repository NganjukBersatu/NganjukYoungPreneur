<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { current, routeKey } from '../composables/useRoute'
import { navItems } from '../data/site'
import LogoMark from './LogoMark.vue'

const open = ref(false)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

// Menu seluler tertutup setiap kali pindah halaman
watch(routeKey, () => {
  open.value = false
})

onMounted(() => addEventListener('keydown', onKey))
onUnmounted(() => removeEventListener('keydown', onKey))
</script>

<template>
  <header id="hd" class="hd">
    <div class="w hd-bar">
      <a class="brand hd-brand" href="#beranda" aria-label="Nganjuk Digital Preneur, ke Beranda">
        <LogoMark />
        <span class="hd-name">Nganjuk Digital Preneur</span>
      </a>

      <nav id="nv" class="hd-nav" :class="{ open }" aria-label="Navigasi utama">
        <a
          v-for="n in navItems"
          :key="n.id"
          class="hd-link"
          :href="'#' + n.id"
          :class="{ on: current === n.id }"
          :aria-current="current === n.id ? 'page' : undefined"
          >{{ n.label }}</a
        >
        <a class="btn bp hd-cta hd-cta-m" href="#kontak">Kontak</a>
      </nav>

      <a
        class="btn bp hd-cta hd-cta-d"
        :class="{ on: current === 'kontak' }"
        href="#kontak"
        :aria-current="current === 'kontak' ? 'page' : undefined"
      >Kontak</a>
      <button class="hd-menu" type="button" aria-controls="nv" :aria-expanded="open" @click="open = !open">
        {{ open ? 'Tutup' : 'Menu' }}
      </button>
    </div>
  </header>
</template>
