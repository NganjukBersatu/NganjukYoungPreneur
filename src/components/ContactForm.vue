<script setup lang="ts">
import { reactive, ref } from 'vue'
import { contactNeeds } from '../data/content'
import AppIcon from './AppIcon.vue'

type Field = 'nama' | 'surel' | 'pesan'

const picked = ref<string[]>([])
const form = reactive<Record<Field, string>>({ nama: '', surel: '', pesan: '' })
const errors = reactive<Record<Field, string>>({ nama: '', surel: '', pesan: '' })
const sent = ref(false)
const nama = ref<HTMLInputElement | null>(null)
const surel = ref<HTMLInputElement | null>(null)
const pesan = ref<HTMLTextAreaElement | null>(null)

const messages: Record<Field, string> = {
  nama: 'Isi nama Anda.',
  surel: 'Isi surel dengan format nama@contoh.com.',
  pesan: 'Tulis pesan Anda.',
}

const toggle = (n: string) => {
  picked.value = picked.value.includes(n) ? picked.value.filter((x) => x !== n) : [...picked.value, n]
}

function submit() {
  const refs: Record<Field, HTMLElement | null> = { nama: nama.value, surel: surel.value, pesan: pesan.value }
  let firstBad: Field | null = null
  for (const k of ['nama', 'surel', 'pesan'] as Field[]) {
    const bad = !form[k].trim() || (k === 'surel' && !/^\S+@\S+\.\S+$/.test(form[k]))
    errors[k] = bad ? messages[k] : ''
    if (bad && !firstBad) firstBad = k
  }
  if (firstBad) {
    sent.value = false
    refs[firstBad]?.focus()
  } else {
    // TODO: kirim data ke backend/API di sini
    form.nama = form.surel = form.pesan = ''
    picked.value = []
    sent.value = true
  }
}
</script>

<template>
  <form id="fm" class="cf rv" v-reveal style="--d: 120ms" novalidate @submit.prevent="submit">
    <h3>Kirim pesan</h3>
    <p class="fs">Pilih kebutuhan Anda, boleh lebih dari satu.</p>
    <div id="kb" class="cp2">
      <button v-for="n in contactNeeds" :key="n" type="button" :aria-pressed="picked.includes(n)" @click="toggle(n)">{{ n }}</button>
    </div>
    <div class="row">
      <div class="f">
        <label for="nama">Nama</label>
        <input id="nama" ref="nama" v-model="form.nama" type="text" autocomplete="name" placeholder="Nama lengkap" required :aria-invalid="!!errors.nama" />
        <p class="err" role="alert">{{ errors.nama }}</p>
      </div>
      <div class="f">
        <label for="surel">Surel</label>
        <input id="surel" ref="surel" v-model="form.surel" type="email" autocomplete="email" placeholder="nama@contoh.com" required :aria-invalid="!!errors.surel" />
        <p class="err" role="alert">{{ errors.surel }}</p>
      </div>
    </div>
    <div class="f">
      <label for="pesan">Pesan</label>
      <textarea id="pesan" ref="pesan" v-model="form.pesan" placeholder="Ceritakan tujuan, pengguna, dan target waktu proyek Anda" required :aria-invalid="!!errors.pesan"></textarea>
      <p class="err" role="alert">{{ errors.pesan }}</p>
    </div>
    <button class="btn bp" type="submit">Kirim pesan <AppIcon name="arr" /></button>
    <p id="ok" role="status" :hidden="!sent">Pesan terkirim. Kami akan membalas lewat surel.</p>
  </form>
</template>