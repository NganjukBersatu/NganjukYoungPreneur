<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// Hero halaman dalam. Pola acuan: jejak halaman, judul (kata kedua berwarna), pengantar,
// dan (opsional) submenu sticky di bawah topbar
const props = defineProps<{
  crumb: string
  title: string
  accent?: string
  lead: string
  sections?: { id: string; label: string }[]
}>()

const activeId = ref<string | null>(null)
let observer: IntersectionObserver | null = null

const scrollToId = (id: string) => {
  activeId.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  if (!props.sections?.length) return
  // ruang untuk topbar (64px) + submenu (~56px) + sedikit napas, supaya judul section tidak tertutup
  document.documentElement.style.scrollPaddingTop = '136px'

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activeId.value = e.target.id
      })
    },
    { rootMargin: '-140px 0px -60% 0px' },
  )
  props.sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
  document.documentElement.style.removeProperty('scroll-padding-top')
})
</script>

<template>
  <section class="dk pgh">
    <div class="w">
      <p class="bc"><a href="#beranda">Beranda</a> / {{ crumb }}</p>
      <h1>{{ title }}{{ accent ? ' ' : '' }}<span v-if="accent">{{ accent }}</span></h1>
      <p class="lead">{{ lead }}</p>
    </div>
  </section>

  <!-- Di luar hero (hero memakai overflow:hidden yang mematikan sticky) -->
  <nav v-if="sections?.length" class="subnav" aria-label="Bagian halaman">
    <div class="w subnav-in">
      <button
        v-for="s in sections"
        :key="s.id"
        type="button"
        :class="{ on: activeId === s.id }"
        :aria-current="activeId === s.id ? 'true' : undefined"
        @click="scrollToId(s.id)"
      >
        {{ s.label }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.subnav {
  position: sticky;
  top: var(--hd, 64px);      /* tepat di bawah topbar */
  z-index: 20;               /* di bawah topbar (z-index 30) */
  background: rgba(255, 255, 255, 0.96);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--b100);
}
.subnav-in {
  display: flex;
  gap: 8px;
  padding-block: 10px;
  overflow-x: auto;
  scrollbar-width: none;
}
.subnav-in::-webkit-scrollbar {
  display: none;
}
.subnav button {
  flex: none;
  white-space: nowrap;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--b100);
  background: #fff;
  color: var(--b700);
  font: 600 14px var(--sans);
  cursor: pointer;
  transition: background 150ms, color 150ms, border-color 150ms;
}
.subnav button:hover {
  border-color: var(--b600);
  color: var(--b600);
}
.subnav button.on {
  background: var(--b600);
  border-color: var(--b600);
  color: #fff;
}
</style>