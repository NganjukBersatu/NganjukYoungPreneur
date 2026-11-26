<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { selected } from '../composables/useProjectDialog'

const dlg = ref<HTMLDialogElement | null>(null)

watch(selected, async (p) => {
  if (!p) return
  await nextTick()
  if (dlg.value && !dlg.value.open) dlg.value.showModal()
})

const close = () => dlg.value?.close()
const onClosed = () => {
  selected.value = null
}
function onClick(e: MouseEvent) {
  const t = e.target as HTMLElement
  if (t === dlg.value || t.closest('.x') || t.closest('#dgc')) close()
}
</script>

<template>
  <dialog id="dg" ref="dlg" aria-labelledby="dgt" @click="onClick" @close="onClosed">
    <template v-if="selected">
      <div id="dgp" class="pt" :style="{ '--g1': selected.from, '--g2': selected.to }">
        <img loading="lazy" decoding="async" v-if="selected.logo" :src="selected.logo" :alt="'Logo ' + selected.name" />
        <span v-else>{{ selected.initial }}</span>
        <button class="x" type="button">Tutup</button>
      </div>
      <div class="pb">
        <h3 id="dgt">{{ selected.name }}</h3>
        <p id="dgd">{{ selected.desc }}</p>
        <div id="dgg"><span v-for="t in selected.tags" :key="t" class="tag">{{ t }}</span></div>
        <div class="meta">
          <div>Status<b>Detail menyusul</b></div>
          <div>Platform<b>{{ selected.tags[0] }}</b></div>
        </div>
        <a id="dgc" class="btn bp" style="margin-top: 22px" href="#kontak">Tanya proyek ini</a>
      </div>
    </template>
  </dialog>
</template>