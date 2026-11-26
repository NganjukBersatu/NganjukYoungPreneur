<script setup lang="ts">
import { computed, nextTick, onMounted, watch, type Component } from 'vue'
import { current, go, initRouter, isPage, origin, rememberOrigin, routeKey, scrollMemory, slug, type PageName } from './composables/useRoute'
import { pageTitles, siteName } from './data/site'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
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

// Tautan lewati navigasi untuk pengguna keyboard dan pembaca layar
const focusMain = () => document.getElementById('isi')?.focus()

const cap = (t: string) => t[0].toUpperCase() + t.slice(1)

// Setiap pindah halaman: ganti judul tab dan gulir ke atas
watch(
  routeKey,
  () => {
    document.title = `${pageTitles[current.value] ?? cap(current.value)} - ${siteName}`

    // 'instant' mengabaikan scroll-behavior: smooth di CSS, supaya tidak saling bertabrakan
    scrollTo({ top: 0, behavior: 'instant' })

    // Kembali dari detail proyek: pulihkan posisi gulir daftar portofolio
    const y = scrollMemory.restoreY
    scrollMemory.restoreY = null
    if (y !== null) {
      // Halaman baru perlu beberapa saat sampai tingginya cukup; coba lagi beberapa kali
      let tries = 0
      const restore = () => {
        scrollTo({ top: y, behavior: 'instant' })
        if (Math.abs(scrollY - y) > 2 && tries++ < 20) requestAnimationFrame(restore)
      }
      nextTick(() => requestAnimationFrame(restore))
    }
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
  // Membuka detail proyek dari halaman mana pun: simpan halaman dan posisi gulir asalnya
  if (n === 'portofolio' && s && !a.classList.contains('pdv-back')) {
    rememberOrigin()
  }
  // Tombol "Kembali": pulihkan posisi gulir di halaman asal
  if (a.classList.contains('pdv-back')) {
    scrollMemory.restoreY = origin.value && origin.value.page === n ? origin.value.y : null
  }
  go(n, s || null)
}

onMounted(() => {
  initRouter()
  addEventListener('click', onLinkClick)
})
</script>

<template>
  <a class="skip" href="#isi" @click.prevent="focusMain">Lewati ke isi halaman</a>
  <AppHeader />
  <main id="isi" tabindex="-1">
    <component :is="activeView" :key="routeKey" />
  </main>
  <AppFooter />
</template>