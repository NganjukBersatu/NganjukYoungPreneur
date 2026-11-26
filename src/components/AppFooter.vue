<script setup lang="ts">
import { contact, navItems, whatsappLink } from '../data/site'
import LogoMark from './LogoMark.vue'
import AppIcon from './AppIcon.vue'

const toTop = () => scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer>
    <div class="w">
      <div class="fg">
        <div>
          <a class="brand" href="#beranda" style="color: #fff">
            <LogoMark />
            <span>Nganjuk <b style="color: var(--ac)">Digital Preneur</b></span>
          </a>
          <p style="margin-top: 16px; max-width: 320px">Tim muda yang membangun solusi digital untuk Nganjuk.</p>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            <li v-for="n in navItems" :key="n.id"><a :href="'#' + n.id">{{ n.label }}</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h3>Layanan</h3>
          <ul>
            <li><a href="#layanan">All software development</a></li>
          </ul>
        </div>
        <div>
          <h3>Kontak</h3>
          <p class="fc"><AppIcon name="pin" /><a :href="contact.mapsUrl" target="_blank" rel="noopener noreferrer">{{ contact.address }}</a></p>
          <p class="fc"><AppIcon name="mail" /><a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
          <p class="fc"><AppIcon name="tel" /><a :href="whatsappLink()" target="_blank" rel="noopener noreferrer">{{ contact.phone }}</a></p>
        </div>
      </div>
      <div class="cp">
        <span>© 2026 Nganjuk Digital Preneur. Semua hak dilindungi.</span>
        <button class="top" type="button" @click="toTop">
          Kembali ke atas
        </button>
      </div>
    </div>
  </footer>
</template>