<script setup lang="ts">
import { serviceItemIcons, services } from '../data/content'
import { slugify } from '../utils/slug'
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import FaqList from '../components/FaqList.vue'
import PageHero from '../components/PageHero.vue'
import StepsGrid from '../components/StepsGrid.vue'

const main = services[0]

// Isi jawaban masih contoh, sesuaikan dengan kondisi perusahaan
const faqs = [
  {
    q: 'Layanan apa saja yang bisa saya pesan?',
    a: 'Kami mengerjakan pembuatan website dan sistem informasi, aplikasi mobile, desain UI/UX, serta pemeliharaan. Klik salah satu layanan di atas untuk membaca penjelasannya.',
  },
  {
    q: 'Bagaimana cara memulai proyek?',
    a: 'Hubungi kami lewat halaman Kontak dan ceritakan kebutuhan Anda. Kami akan membalas untuk membahas ruang lingkup, lalu mengirim penawaran.',
  },
  {
    q: 'Berapa lama pengerjaan sebuah proyek?',
    a: 'Tergantung ukuran dan kerumitan proyek. Perkiraan waktu kami sampaikan setelah kebutuhan Anda jelas, sebelum pengerjaan dimulai.',
  },
  {
    q: 'Berapa biaya yang dibutuhkan?',
    a: 'Biaya mengikuti jenis dan skala proyek. Kami memberi penawaran tertulis setelah berdiskusi, jadi Anda tahu angkanya sebelum setuju.',
  },
  {
    q: 'Apakah ada dukungan setelah proyek selesai?',
    a: 'Ada. Kami membantu perbaikan dan pertanyaan setelah proyek diserahkan. Rinciannya kami sepakati bersama di awal.',
  },
  {
    q: 'Bisakah saya melihat contoh hasil kerja sebelumnya?',
    a: 'Bisa. Lihat halaman Portofolio, atau minta demo lewat tombol "Tanya proyek ini" pada proyek yang Anda minati.',
  },
]
</script>

<template>
  <div id="layanan" class="pg on">
    <PageHero crumb="Layanan" title="Layanan" accent="kami" lead="Layanan yang kami tawarkan untuk membantu kebutuhan digital Anda." />

    <section class="sec">
      <div class="w">
        <div class="sv rv" v-reveal>
          <div class="svm">
            <div class="ic"><AppIcon :name="main.icon" /></div>
            <h3>{{ main.title }}</h3>
            <p>{{ main.desc }}</p>
          </div>
          <ul class="svl">
            <li v-for="(item, i) in main.items" :key="item" class="svl-item">
              <span class="svi"><AppIcon :name="serviceItemIcons[i]" /></span>
              <b>{{ item }}</b>
              <span class="svl-go" aria-hidden="true">Lihat detail &rarr;</span>
              <!-- Link ini menutupi seluruh kartu, jadi seluruh kartu bisa diklik -->
              <a class="svl-a" :href="'#layanan/' + slugify(item)" :aria-label="'Lihat detail ' + item"></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Cara kerja</h2>
        <StepsGrid extra-class="tl" />
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <h2 class="rv" v-reveal style="text-align: center">Pertanyaan yang sering diajukan</h2>
        <FaqList :items="faqs" />
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.svl-item {
  position: relative;
  cursor: pointer;
}
.svl-a {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.svl-a:focus-visible {
  outline: 3px solid rgba(29, 63, 214, 0.4);
  outline-offset: 2px;
}
.svl-go {
  position: absolute;
  top: 16px;
  right: 18px;
  font-size: 12px;
  font-weight: 700;
  color: #1d3fd6;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
}
.svl-item:hover .svl-go,
.svl-item:focus-within .svl-go {
  opacity: 1;
  transform: none;
}
@media (hover: none) {
  .svl-go {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 900px) {
  .svl-item {
    display: flex;
    align-items: center;   /* semua isi sejajar di tengah secara vertikal */
    gap: 12px;
  }
  .svl-item b {
    flex: 1;               /* judul mengambil sisa ruang */
    min-width: 0;          /* boleh membungkus ke baris baru */
  }
  .svl-go {
    position: static;      /* ikut alur layout, tidak melayang */
    flex: none;            /* tidak boleh menyusut */
    white-space: nowrap;   /* tidak pecah jadi dua baris */
    font-size: 11px;
  }
}
</style>