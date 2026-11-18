<script setup lang="ts">
import { onMounted, watch, type Component } from 'vue'
import { current, go, initRouter, isPage, routeKey, type PageName } from './composables/useRoute'
import { pageTitles, siteName } from './data/site'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import DesignNote from './components/DesignNote.vue'
import ProjectModal from './components/ProjectModal.vue'
import HomeView from './views/HomeView.vue'
import ProfilView from './views/ProfilView.vue'
import LayananView from './views/LayananView.vue'
import PortofolioView from './views/PortofolioView.vue'
import KontakView from './views/KontakView.vue'
import PanduanView from './views/PanduanView.vue'

const views: Record<PageName, Component> = {
  beranda: HomeView,
  profil: ProfilView,
  layanan: LayananView,
  portofolio: PortofolioView,
  kontak: KontakView,
  panduan: PanduanView,
}

const cap = (t: string) => t[0].toUpperCase() + t.slice(1)

// Setiap pindah halaman: ganti judul tab dan gulir ke atas
watch(
  routeKey,
  () => {
    document.title = `${pageTitles[current.value] ?? cap(current.value)} - ${siteName}`
    scrollTo(0, 0)
  },
  { immediate: true },
)

// Tautan "#halaman" ditangani tanpa vue-router, sama seperti HTML asli
function onLinkClick(e: MouseEvent) {
  const a = (e.target as Element).closest('a[href^="#"]')
  if (!a) return
  const n = a.getAttribute('href')!.replace(/^#\/?/, '')
  if (!isPage(n)) return
  e.preventDefault()
  go(n)
}

onMounted(() => {
  initRouter()
  addEventListener('click', onLinkClick)
})
</script>

<template>
  <SvgSprite />
  <AppHeader />
  <main>
    <component :is="views[current]" :key="routeKey" />
  </main>
  <AppFooter />
  <ProjectModal />
  <DesignNote />
</template>