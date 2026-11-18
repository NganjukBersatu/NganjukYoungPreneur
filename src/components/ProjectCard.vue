<script setup lang="ts">
import type { Project } from '../types'
import { delay } from '../utils/delay'
import { slugify } from '../utils/slug'
import AppIcon from './AppIcon.vue'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="card pf rv pcard" v-reveal :style="delay(index)">
    <div class="pt" :style="{ '--g1': project.from, '--g2': project.to }">
      <img v-if="project.logo" :src="project.logo" :alt="'Logo ' + project.name" />
      <template v-else>{{ project.initial }}</template>
    </div>
    <div class="pb">
      <h3>{{ project.name }}</h3>
      <p>{{ project.desc }}</p>
      <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span><br />
      <!-- ::after pada link ini membuat seluruh kartu bisa diklik -->
      <a class="lk" :href="'#portofolio/' + slugify(project.name)">
        Lihat proyek <AppIcon name="arr" :size="16" />
      </a>
    </div>
  </article>
</template>

<style scoped>
.pcard {
  position: relative;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.pcard:hover {
  transform: translateY(-6px);
  border-color: rgba(29, 63, 214, 0.35);
  box-shadow: 0 24px 50px rgba(29, 63, 214, 0.16);
}
.pcard .lk::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.pcard .lk:focus-visible::after {
  outline: 3px solid rgba(29, 63, 214, 0.4);
  outline-offset: 2px;
}
.pcard:hover .lk :deep(svg) {
  transform: translate(3px, -3px);
}
.pcard .lk :deep(svg) {
  transition: transform 0.2s;
}
</style>