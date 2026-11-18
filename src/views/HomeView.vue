<script setup lang="ts">
import { services, values } from '../data/content'
import { projects } from '../data/projects'
import { openProject } from '../composables/useProjectDialog'
import { delay } from '../utils/delay'
import AppIcon from '../components/AppIcon.vue'
import HeroIllustration from '../components/HeroIllustration.vue'
import ProjectCard from '../components/ProjectCard.vue'
import StepsGrid from '../components/StepsGrid.vue'
</script>

<template>
  <div id="beranda" class="pg on">
    <section class="dk hero">
      <div class="w hg">
        <div>
          <h1 class="rv" v-reveal>Nganjuk<br /><span>Digital Preneur</span></h1>
          <p class="lead rv" v-reveal style="--d: 150ms">Kami membangun solusi digital yang membantu usaha dan komunitas di Nganjuk tumbuh lebih cepat.</p>
          <div class="cta rv" v-reveal style="--d: 300ms">
            <a class="btn ba" href="#portofolio">Lihat portofolio</a>
            <a class="btn bo" href="#kontak">Hubungi kami</a>
          </div>
          <div class="chips rv" v-reveal style="--d: 450ms"><span class="chip">All software development</span></div>
        </div>
        <div class="rv hv" v-reveal style="--d: 250ms">
          <div class="hglow"></div>
          <HeroIllustration />
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Apa yang bisa kami bantu</h2>
        <p class="sub rv" v-reveal style="--d: 100ms">Semua kebutuhan pengembangan perangkat lunak, dikerjakan oleh tim muda Nganjuk.</p>
        <div class="g3">
          <div v-for="(s, i) in services" :key="s.title" class="card rv" v-reveal :style="delay(i)">
            <div class="ic"><AppIcon :name="s.icon" /></div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
        <a class="lk more" href="#layanan">Lihat semua layanan <AppIcon name="arr" :size="16" /></a>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Proyek yang sudah dipakai</h2>
        <div class="g3">
          <ProjectCard v-for="(p, i) in projects" :key="p.name" :project="p" :index="i" @open="openProject" />
        </div>
        <a class="lk more" href="#portofolio">Lihat portofolio <AppIcon name="arr" :size="16" /></a>
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Yang kami pegang</h2>
        <div class="g3">
          <div v-for="(v, i) in values" :key="v.title" class="card rv" v-reveal :style="delay(i)">
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Cara kerja kami</h2>
        <StepsGrid />
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <div class="band rv" v-reveal>
          <div>
            <h2>Mulai kerja sama</h2>
            <p>Ceritakan kebutuhan Anda, kami bantu mencari solusinya.</p>
          </div>
          <a class="btn ba" href="#kontak">Hubungi kami</a>
        </div>
      </div>
    </section>
  </div>
</template>