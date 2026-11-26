<script setup lang="ts">
import { contact } from '../data/site'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <div class="soc">
    <a :href="contact.instagramUrl" target="_blank" rel="noopener noreferrer" aria-label="Instagram Nganjuk Digital Preneur">
      <AppIcon name="ig" />
    </a>
  </div>
</template>