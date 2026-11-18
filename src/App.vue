<script setup lang="ts">
import { computed, onMounted, watch, type Component } from 'vue'
import { current, go, initRouter, isPage, routeKey, slug, type PageName } from './composables/useRoute'
import { pageTitles, siteName } from './data/site'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import DesignNote from './components/DesignNote.vue'
import HomeView from './views/HomeView.vue'
import ProfilView from './views/ProfilView.vue'
import LayananView from './views/LayananView.vue'
import LayananDetailView from './views/LayananDetailView.vue'
import PortofolioView from './views/PortofolioView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'
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

// Halaman detail (URL berbentuk #halaman/slug)
const detailViews: Partial<Record<PageName, Component>> = {
  portofolio: ProjectDetailView,
  layanan: LayananDetailView,
}

const activeView = computed<Component>(() =>
  slug.value && detailViews[current.value] ? detailViews[current.value]! : views[current.value],
)

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

// Tautan "#halaman" atau "#halaman/slug" ditangani tanpa vue-router
function onLinkClick(e: MouseEvent) {
  const a = (e.target as Element).closest('a[href^="#"]')
  if (!a) return
  const [n, s] = a.getAttribute('href')!.replace(/^#\/?/, '').split('/')
  if (!isPage(n)) return
  e.preventDefault()
  go(n, s || null)
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
    <component :is="activeView" :key="routeKey" />
  </main>
  <AppFooter />
  <DesignNote />
</template>