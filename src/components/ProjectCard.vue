<script setup lang="ts">
import type { Project } from '../types'
import { delay } from '../utils/delay'
import AppIcon from './AppIcon.vue'

defineProps<{ project: Project; index: number }>()
const emit = defineEmits<{ open: [project: Project] }>()
</script>

<template>
  <article class="card pf rv" v-reveal :style="delay(index)">
    <div class="pt" :style="{ '--g1': project.from, '--g2': project.to }">
      <img v-if="project.logo" :src="project.logo" :alt="'Logo ' + project.name" />
      <template v-else>{{ project.initial }}</template>
    </div>
    <div class="pb">
      <h3>{{ project.name }}</h3>
      <p>{{ project.desc }}</p>
      <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span><br />
      <a class="lk" href="#portofolio" @click.prevent.stop="emit('open', project)">
        Lihat proyek <AppIcon name="arr" :size="16" />
      </a>
    </div>
  </article>
</template>