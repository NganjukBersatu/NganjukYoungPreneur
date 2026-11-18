<script setup lang="ts">
import { steps } from '../data/content'
import { delay } from '../utils/delay'
defineProps<{ extraClass?: string }>()
</script>

<template>
  <div class="g3" :class="extraClass">
    <div v-for="(s, i) in steps" :key="s.title" class="st rv" v-reveal :style="delay(i)">
      <span class="n">{{ i + 1 }}</span>
      <div>
        <h3>{{ s.title }}</h3>
        <p>{{ s.text }}</p>
      </div>
    </div>
  </div>
</template>