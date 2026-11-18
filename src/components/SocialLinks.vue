<script setup lang="ts">
import AppIcon from './AppIcon.vue'
// Ganti href="#" dengan tautan media sosial asli
</script>

<template>
  <div class="soc">
    <a href="#" aria-label="Instagram" @click.prevent><AppIcon name="ig" /></a>
    <a href="#" aria-label="GitHub" @click.prevent><AppIcon name="gh" /></a>
    <a href="#" aria-label="LinkedIn" @click.prevent><AppIcon name="li" /></a>
  </div>
</template>