<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { current, routeKey } from '../composables/useRoute'
import { navItems } from '../data/site'
import LogoMark from './LogoMark.vue'
import AppIcon from './AppIcon.vue'

const hd = ref<HTMLElement | null>(null)
const open = ref(false)
const scrolled = ref(false)
const light = ref(false)

// Navbar mengikuti latar di belakangnya: gelap di atas bagian gelap, putih di atas bagian terang
const DK = '.dk:not(.pgh),.vs,.band,.kt,.feat,.svm,.b2.tall,.b2.wide,.bt.big,.bt.ac,footer'
const LT = '.sec,.dk.pgh,.card'
let tk = 0

function tone() {
  tk = 0
  const bar = hd.value?.querySelector('.w')
  if (!bar) return
  const r = bar.getBoundingClientRect()
  const els = document
    .elementsFromPoint(innerWidth / 2, r.top + r.height / 2)
    .filter((e) => !hd.value!.contains(e))
  for (const e of els) {
    let n: Element | null = e
    while (n && n !== document.body) {
      if (n.matches(DK)) return void (light.value = false)
      if (n.matches(LT)) return void (light.value = true)
      n = n.parentElement
    }
  }
  light.value = true
}

function onScroll() {
  scrolled.value = scrollY > 8
  if (!tk) tk = requestAnimationFrame(tone)
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

watch(routeKey, () => {
  open.value = false
  requestAnimationFrame(() => requestAnimationFrame(tone))
})

onMounted(() => {
  addEventListener('scroll', onScroll, { passive: true })
  addEventListener('resize', tone)
  addEventListener('keydown', onKey)
  requestAnimationFrame(() => requestAnimationFrame(tone))
})
onUnmounted(() => {
  removeEventListener('scroll', onScroll)
  removeEventListener('resize', tone)
  removeEventListener('keydown', onKey)
})
</script>

<template>
  <header id="hd" ref="hd" :class="{ sc: scrolled, lt: light }">
    <div class="w">
      <a class="brand" href="#beranda">
        <LogoMark />
        <span>Nganjuk <b>Digital Preneur</b></span>
      </a>
      <nav id="nv" :class="{ open }" aria-label="Navigasi utama">
        <a v-for="n in navItems" :key="n.id" :href="'#' + n.id" :class="{ on: current === n.id }">{{ n.label }}</a>
      </nav>
      <a class="btn bp nc" href="#kontak">Hubungi kami</a>
      <button class="mb" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <AppIcon name="menu" />
      </button>
    </div>
  </header>
</template>