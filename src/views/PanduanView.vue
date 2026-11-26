<script setup lang="ts">
import { accessibility, colors, patterns, tokens, typography } from '../data/guide'
import PageHero from '../components/PageHero.vue'
import fomoLogo from '../assets/fomo-logo.png'
</script>

<template>
  <div id="panduan" class="pg on">
    <PageHero crumb="Panduan desain" title="Panduan" accent="desain" lead="Patokan visual untuk tim UI/UX. Semua nilai di sini sama dengan yang dipakai situs ini, jadi cukup salin." />

    <section class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Warna</h2>
        <p class="sub">Pakai nama token, bukan kode hex, saat menyerahkan desain ke developer.</p>
        <div class="sw">
          <div v-for="c in colors" :key="c.name + c.hex" class="card">
            <div class="cc" :style="{ background: c.hex }"></div>
            <h3>{{ c.name }}</h3>
            <p><code>{{ c.token }}</code> <code>{{ c.hex }}</code></p>
            <p>{{ c.use }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Tipografi</h2>
        <p class="sub">Satu keluarga huruf: Plus Jakarta Sans. Cadangan: Segoe UI, system-ui.</p>
        <div style="margin-top: 28px">
          <div v-for="t in typography" :key="t.name" class="tr">
            <div :style="{ fontSize: t.size + 'px', fontWeight: t.weight, lineHeight: '1.2', color: 'var(--ink)' }">{{ t.name }}</div>
            <p>{{ t.spec }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Spasi, bentuk, dan gerak</h2>
        <div class="g3">
          <div v-for="g in tokens" :key="g.title" class="card">
            <h3>{{ g.title }}</h3>
            <ul><li v-for="x in g.items" :key="x">{{ x }}</li></ul>
          </div>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Komponen</h2>
        <p class="sub">Tombol selalu berbentuk pil. Tombol utama satu per bagian layar.</p>
        <div class="demo">
          <a class="btn bp" href="#panduan">Tombol utama</a>
          <a class="btn bp nc" href="#panduan">Tombol navbar</a>
          <span class="tag" style="margin: 0">Label</span>
        </div>
        <div class="demo dk2">
          <a class="btn ba" href="#panduan">Tombol aksen</a>
          <a class="btn bo" href="#panduan">Tombol garis</a>
        </div>
        <div class="dd">
          <div class="card ok2">
            <h3>Lakukan</h3>
            <ul>
              <li>Satu tombol utama per bagian layar.</li>
              <li>Tulis tombol dengan kata kerja: "Kirim pesan", bukan "Submit".</li>
              <li>Beri jarak kelipatan 8px.</li>
              <li>Pakai kalimat biasa, bukan huruf kapital semua.</li>
            </ul>
          </div>
          <div class="card no2">
            <h3>Jangan</h3>
            <ul>
              <li>Menambah warna di luar token.</li>
              <li>Memakai sudut siku pada kartu atau tombol.</li>
              <li>Teks putih di atas warna aksen terang; pakai teks gelap (--ink).</li>
              <li>Menaruh teks kurang dari 14px untuk isi.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Pola halaman</h2>
        <p class="sub">Halaman Profil Perusahaan adalah contoh acuan. Halaman lain mengikuti susunan yang sama.</p>
        <div class="g3">
          <div v-for="p in patterns" :key="p.title" class="card rv" v-reveal>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Aksesibilitas</h2>
        <div class="g3">
          <div v-for="a in accessibility" :key="a.title" class="card">
            <h3>{{ a.title }}</h3>
            <p>{{ a.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <div class="feat rv" v-reveal>
          <img loading="lazy" decoding="async" :src="fomoLogo" alt="Logo FOMO" />
          <div>
            <h2>Aturan logo FOMO</h2>
            <p>Logo bulat berwarna hijau tua dan putih. Taruh di atas latar putih atau hijau gelap (#123F2F).</p>
            <ul style="margin-top: 14px; padding-left: 18px; list-style: disc; color: rgba(236, 253, 245, 0.85); font-size: 15px">
              <li>Ukuran terkecil 48px.</li>
              <li>Sisakan ruang kosong seperempat diameter di sekelilingnya.</li>
              <li>Jangan ubah warna, rotasi, atau regangkan.</li>
              <li>Warna merek: #123F2F, #23624A, putih.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>