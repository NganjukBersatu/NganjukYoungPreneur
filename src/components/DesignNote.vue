<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <div v-if="show" class="note" @click="show = false">
    Pratinjau desain. Alamat, surel, telepon, dan media sosial masih data contoh; akan diganti data asli. Klik untuk menutup.
  </div>
</template>