<script setup lang="ts">
import { contact } from '../data/site'
import { contactTips } from '../data/content'
import { delay } from '../utils/delay'
import AppIcon from '../components/AppIcon.vue'
import ContactForm from '../components/ContactForm.vue'
import LogoMark from '../components/LogoMark.vue'
import PageHero from '../components/PageHero.vue'
import SocialLinks from '../components/SocialLinks.vue'
</script>

<template>
  <div id="kontak" class="pg on">
    <PageHero crumb="Kontak" title="Hubungi" accent="kami" lead="Punya pertanyaan atau ingin bekerja sama? Kirim pesan kepada kami." />

    <section class="sec">
      <div class="w">
        <div class="ct">
          <aside class="cl rv" v-reveal>
            <h2>Mari bahas proyek Anda</h2>
            <p class="sub">Ceritakan kebutuhan Anda. Kami membalas lewat surel.</p>
            <a class="cr" :href="'mailto:' + contact.email">
              <span class="ci2"><AppIcon name="mail" /></span>
              <span><small>Surel</small>{{ contact.email }}</span>
            </a>
            <a class="cr" :href="'tel:' + contact.phoneHref">
              <span class="ci2"><AppIcon name="tel" /></span>
              <span><small>Telepon</small>{{ contact.phone }}</span>
            </a>
            <div class="cr">
              <span class="ci2"><AppIcon name="pin" /></span>
              <span><small>Alamat</small>{{ contact.address }}</span>
            </div>
            <SocialLinks />
          </aside>
          <ContactForm />
        </div>

        <div class="mapx rv" v-reveal>
<svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="1200" height="300" fill="#eef4ff"/>
<g fill="#dce8ff"><rect x="40" y="30" width="200" height="90" rx="14"/><rect x="300" y="170" width="260" height="100" rx="14"/><rect x="640" y="20" width="220" height="110" rx="14"/><rect x="900" y="160" width="250" height="110" rx="14"/><rect x="60" y="180" width="180" height="90" rx="14"/></g>
<path d="M0 150H1200M270 0V300M600 0V300M880 0V300" stroke="#fff" stroke-width="16"/><path d="M0 230C300 200 500 290 800 250S1100 210 1200 240" stroke="#bfe3fb" stroke-width="22" fill="none"/></svg>
          <div class="pin"><i></i><LogoMark /></div>
          <div class="mc">
            <b>Nganjuk Digital Preneur</b>
            <span>{{ contact.address }}</span>
            <small>Peta ilustrasi, akan diganti peta asli.</small>
            <a class="btn bp" :href="contact.mapsUrl" target="_blank" rel="noopener">Buka di Google Maps</a>
          </div>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Supaya pesan Anda cepat dibahas</h2>
        <div class="g3">
          <div v-for="(t, i) in contactTips" :key="t.title" class="card rv" v-reveal :style="delay(i)">
            <h3>{{ t.title }}</h3>
            <p>{{ t.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>