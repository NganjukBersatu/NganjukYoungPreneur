<script setup lang="ts">
import { contact, navItems } from '../data/site'
import LogoMark from './LogoMark.vue'
import AppIcon from './AppIcon.vue'
import SocialLinks from './SocialLinks.vue'

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
          <SocialLinks />
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            <li v-for="n in navItems" :key="n.id"><a :href="'#' + n.id">{{ n.label }}</a></li>
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
          <p class="fc"><AppIcon name="pin" />{{ contact.address }}</p>
          <p class="fc"><AppIcon name="mail" />{{ contact.email }}</p>
          <p class="fc"><AppIcon name="tel" />{{ contact.phone }}</p>
        </div>
      </div>
      <div class="cp">
        <span>© 2026 Nganjuk Digital Preneur. Semua hak dilindungi.</span>
        <button class="top" type="button" @click="toTop">
          Kembali ke atas <AppIcon name="up" :size="16" />
        </button>
      </div>
    </div>
  </footer>
</template>