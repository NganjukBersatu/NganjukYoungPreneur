<script setup lang="ts">
import { reactive, ref } from 'vue'
import { contactNeeds } from '../data/content'
import { whatsappLink } from '../data/site'

type Field = 'nama' | 'surel' | 'pesan'

const picked = ref<string[]>([])
const form = reactive<Record<Field, string>>({ nama: '', surel: '', pesan: '' })
const errors = reactive<Record<Field, string>>({ nama: '', surel: '', pesan: '' })
const sent = ref(false)
const nama = ref<HTMLInputElement | null>(null)
const surel = ref<HTMLInputElement | null>(null)
const pesan = ref<HTMLTextAreaElement | null>(null)

const messages: Record<Field, string> = {
  nama: 'Isi nama Anda agar kami tahu siapa yang dihubungi.',
  surel: 'Isi surel dengan format nama@contoh.com.',
  pesan: 'Tulis pesan Anda, misalnya tujuan dan target waktu proyek.',
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
    // Pesan disiapkan lalu dibuka di WhatsApp (0851 1996 6640)
    const text = [
      'Halo Nganjuk Digital Preneur, saya ingin berdiskusi.',
      '',
      `Nama: ${form.nama.trim()}`,
      `Surel: ${form.surel.trim()}`,
      picked.value.length ? `Kebutuhan: ${picked.value.join(', ')}` : '',
      '',
      form.pesan.trim(),
    ]
      .filter((l, i, a) => l !== '' || (a[i - 1] !== '' && i > 0))
      .join('\n')
    const w = window.open(whatsappLink(text), '_blank')
    if (w) w.opener = null
    else location.href = whatsappLink(text)
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
        <input id="nama" ref="nama" v-model="form.nama" type="text" autocomplete="name" placeholder="Contoh: Budi Santoso" required :aria-invalid="!!errors.nama" aria-describedby="err-nama" />
        <p id="err-nama" class="err" role="alert">{{ errors.nama }}</p>
      </div>
      <div class="f">
        <label for="surel">Surel</label>
        <input id="surel" ref="surel" v-model="form.surel" type="email" autocomplete="email" placeholder="Contoh: nama@contoh.com" required :aria-invalid="!!errors.surel" aria-describedby="err-surel" />
        <p id="err-surel" class="err" role="alert">{{ errors.surel }}</p>
      </div>
    </div>
    <div class="f">
      <label for="pesan">Pesan</label>
      <textarea id="pesan" ref="pesan" v-model="form.pesan" placeholder="Contoh: aplikasi kasir untuk 3 cabang, target selesai 2 bulan" required :aria-invalid="!!errors.pesan" aria-describedby="err-pesan"></textarea>
      <p id="err-pesan" class="err" role="alert">{{ errors.pesan }}</p>
    </div>
    <button class="btn bp" type="submit">Kirim pesan</button>
    <p id="ok" role="status" :hidden="!sent">Pesan Anda sudah disiapkan di WhatsApp. Tekan kirim di sana untuk melanjutkan.</p>
  </form>
</template>