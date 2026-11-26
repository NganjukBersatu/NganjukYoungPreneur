<script setup lang="ts">
import { contact, mapsEmbedUrl, whatsappLink } from '../data/site'
import { contactTips } from '../data/content'
import { delay } from '../utils/delay'
import ContactForm from '../components/ContactForm.vue'
import PageHero from '../components/PageHero.vue'
</script>

<template>
  <div id="kontak" class="pg on">
    <PageHero crumb="Kontak" title="Hubungi" accent="kami" lead="Punya pertanyaan atau ingin bekerja sama? Kirim pesan kepada kami." />

    <section class="sec">
      <div class="w">
        <div class="ct">
          <aside class="cl rv" v-reveal>
            <h2>Mari bahas proyek Anda</h2>
            <p class="sub">Ceritakan kebutuhan Anda. Kami membalas lewat WhatsApp atau surel.</p>
            <a class="cr" :href="'mailto:' + contact.email">
              <span><small>Surel</small>{{ contact.email }}</span>
            </a>
            <a class="cr" :href="whatsappLink()" target="_blank" rel="noopener noreferrer">
              <span><small>Telepon / WhatsApp</small>{{ contact.phone }}</span>
            </a>
            <a class="cr" :href="contact.mapsUrl" target="_blank" rel="noopener noreferrer">
              <span><small>Alamat</small>{{ contact.address }}</span>
            </a>
          </aside>
          <ContactForm />
        </div>

        <div class="mapx rv" v-reveal>
          <iframe
            :src="mapsEmbedUrl"
            title="Lokasi Nganjuk Digital Preneur di Google Maps"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <a class="mapx-link" :href="contact.mapsUrl" target="_blank" rel="noopener noreferrer">
            <b>Nganjuk Digital Preneur</b>
            <span>Buka di Google Maps</span>
          </a>
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