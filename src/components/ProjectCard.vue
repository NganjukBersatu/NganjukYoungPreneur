<script setup lang="ts">
import type { Project } from '../types'
import { delay } from '../utils/delay'
import { slugify } from '../utils/slug'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="card pf rv pcard" v-reveal :style="delay(index)">
    <div class="pt" :style="{ '--g1': project.from, '--g2': project.to }">
      <img loading="lazy" decoding="async" v-if="project.logo" :src="project.logo" :alt="'Logo ' + project.name" />
      <template v-else>{{ project.initial }}</template>
    </div>
    <div class="pb">
      <h3>{{ project.name }}</h3>
      <p>{{ project.desc }}</p>
      <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span><br />
      <!-- ::after pada link ini membuat seluruh kartu bisa diklik -->
      <a class="lk" :href="'#portofolio/' + slugify(project.name)">Lihat proyek</a>
    </div>
  </article>
</template>

<style scoped>
.pcard {
  position: relative;
  cursor: pointer;
  transition: transform 240ms, box-shadow 240ms, border-color 240ms;
}
.pcard:hover {
  transform: translateY(-6px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: var(--sh-2);
}
.pcard .lk::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.pcard .lk:focus-visible::after {
  outline: 2px solid #1d3fd6;
  outline-offset: 2px;
}
.pcard .lk {
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  margin-top: 6px;
  border-radius: 6px;
  background: #eef3ff;
  border: 1px solid rgba(29, 63, 214, 0.25);
  color: #1d3fd6;
  font-size: 13px;
  font-weight: 700;
  transition: background 150ms, color 150ms, border-color 150ms;
}
.pcard:hover .lk {
  background: #1d3fd6;
  border-color: #1d3fd6;
  color: #fff;
}
</style>