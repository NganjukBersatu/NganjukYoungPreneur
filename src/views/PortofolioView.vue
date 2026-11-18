<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '../data/projects'
import { openProject } from '../composables/useProjectDialog'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import fomoLogo from '../assets/fomo-logo.png'

const tags = computed(() => ['Semua', ...new Set(projects.flatMap((p) => p.tags))])
const active = ref('Semua')
const visible = (tagList: string[]) => active.value === 'Semua' || tagList.includes(active.value)
</script>

<template>
  <div id="portofolio" class="pg on">
    <PageHero crumb="Portofolio" title="Portofolio" lead="Proyek yang sudah digunakan perusahaan." />

    <section class="sec" style="padding-bottom: 0">
      <div class="w">
        <div class="feat rv" v-reveal>
          <img :src="fomoLogo" alt="Logo FOMO" />
          <div>
            <h2>FOMO</h2>
            <p>Feed the Panic. Aplikasi mobile dengan identitas visual hijau tua yang tegas dan mudah dikenali.</p>
            <span class="tag">Mobile</span><span class="tag">UI/UX</span><br />
            <a class="btn ba" href="#kontak">Minta demo FOMO</a>
          </div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="w">
        <div id="flt" class="flt rv" v-reveal>
          <button v-for="t in tags" :key="t" type="button" :class="{ on: active === t }" @click="active = t">{{ t }}</button>
        </div>
        <div class="g3" style="margin-top: 32px">
          <ProjectCard
            v-for="(p, i) in projects"
            v-show="visible(p.tags)"
            :key="p.name"
            :project="p"
            :index="i"
            @open="openProject"
          />
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>