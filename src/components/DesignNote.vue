<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <!-- Catatan pratinjau berada di alur halaman (bukan melayang), supaya tidak menutupi tombol atau isi -->
  <div v-if="show" class="note" role="status">
    <p>Pratinjau desain. Tautan Instagram masih perkiraan dan akan disesuaikan dengan akun asli.</p>
    <button type="button" class="note-x" @click="show = false">Tutup</button>
  </div>
</template>
