<script setup lang="ts">
import { computed, type Component } from 'vue'
import { ArrowUpRight, ChevronUp, Globe, Layers, Mail, MapPin, Menu, Phone, Smartphone, Wrench } from 'lucide-vue-next'

const props = defineProps<{ name: string; size?: number }>()

// Ikon dari paket lokal lucide-vue-next (tanpa CDN)
const icons: Record<string, Component> = {
  globe: Globe,
  layers: Layers,
  phone: Smartphone,
  mail: Mail,
  pin: MapPin,
  tel: Phone,
  wr: Wrench,
  up: ChevronUp,
  menu: Menu,
  arr: ArrowUpRight,
}

// Logo media sosial: ditulis lokal di sini karena lucide menandai ikon merek sebagai usang
const brands: Record<string, string> = {
  ig: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.4 2.2 4 4 0 0 1 7.4-2.2z"/><path d="M17.5 6.5h.01"/>',
  li: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  gh: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
}

const sizeStyle = computed(() => (props.size ? { width: props.size + 'px', height: props.size + 'px' } : undefined))
</script>

<template>
  <svg v-if="brands[name]" class="i" viewBox="0 0 24 24" :style="sizeStyle" aria-hidden="true" v-html="brands[name]"></svg>
  <component :is="icons[name]" v-else class="i" :style="sizeStyle" aria-hidden="true" />
</template>