<script setup lang="ts">
import { focusAreas, missions, profileSections, teamGroups, values } from '../data/content'
import { delay } from '../utils/delay'
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import LogoMark from '../components/LogoMark.vue'
import PageHero from '../components/PageHero.vue'
</script>

<template>
  <div id="profil" class="pg on">
    <PageHero
      crumb="Profil Perusahaan"
      title="Profil"
      accent="Perusahaan"
      lead="Siapa Nganjuk Digital Preneur, apa yang kami tuju, dan nilai yang kami pegang."
      :sections="profileSections"
    />

    <section id="p-siapa" class="sec">
      <div class="w">
        <div class="ab">
          <div class="rv" v-reveal>
            <h2>Siapa kami</h2>
            <p class="sub">Kami berawal dari sekelompok anak muda Nganjuk yang ingin berkarya lewat teknologi. Kini kami mengerjakan berbagai proyek digital untuk kebutuhan nyata, mulai dari aplikasi internal sampai produk untuk masyarakat.</p>
          </div>
          <div class="bn2 rv" v-reveal style="--d: 100ms">
            <div class="b2 tall">
              <LogoMark />
              <b>Tim muda Nganjuk</b>
              <p>Berkarya lewat teknologi untuk kebutuhan nyata.</p>
              <div class="pl"><span>Myth</span><span>Fomo</span><span>Office Hub</span></div>
            </div>
            <div class="b2">
              <div class="av3"><i>M</i><i>F</i><i>O</i></div>
              <strong>3</strong><span>produk digital</span>
            </div>
            <div class="b2">
              <div class="pn"><AppIcon name="pin" /></div>
              <strong>Nganjuk</strong><span>kota asal kami</span>
            </div>
            <div class="b2 wide">
              <div><strong>Web dan mobile</strong><span>platform yang kami kerjakan</span></div>
              <div class="dev"><div class="br"><u></u><u></u><u></u></div><div class="ph"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="p-visi" class="sec vs">
      <div class="w">
        <div class="vg">
          <div class="rv" v-reveal>
            <h2>Visi</h2>
            <p class="vq">Menjadi tim digital muda yang dipercaya di Nganjuk dan sekitarnya.</p>
          </div>
          <div class="ms rv" v-reveal style="--d: 100ms">
            <h3>Misi</h3>
            <ul>
              <li v-for="m in missions" :key="m">
                <span class="ck"><svg class="i" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7" /></svg></span>{{ m }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="p-fokus" class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Bidang yang kami kerjakan</h2>
        <p class="sub">Tiga bidang yang tampak dari proyek-proyek kami.</p>
        <div class="g3">
          <article v-for="f in focusAreas" :key="f.title" class="card bd rv" v-reveal>
            <div class="bh" :style="{ '--g1': f.from, '--g2': f.to }"><AppIcon :name="f.icon" /></div>
            <div class="bb">
              <h3>{{ f.title }}</h3>
              <p>{{ f.text }}</p>
              <span v-for="t in f.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="p-nilai" class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Nilai yang kami pegang</h2>
        <div class="vl">
          <div v-for="v in values" :key="v.title" class="vr rv" v-reveal>
            <b>{{ v.title }}</b>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="p-tim" class="sec">
      <div class="w">
        <h2 class="rv" v-reveal>Tim di balik proyek</h2>
        <p class="sub">Setiap proyek dikerjakan lintas bagian.</p>
        <div class="g3 tm">
          <div v-for="(g, i) in teamGroups" :key="g.title" class="card rv" v-reveal :style="delay(i)">
            <div class="av">{{ g.badge }}</div>
            <h3>{{ g.title }}</h3>
            <p>{{ g.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>