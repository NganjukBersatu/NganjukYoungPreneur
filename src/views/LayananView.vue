<script setup lang="ts">
import { serviceItemIcons, services } from '../data/content'
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import StepsGrid from '../components/StepsGrid.vue'

const main = services[0]
</script>

<template>
  <div id="layanan" class="pg on">
    <PageHero crumb="Layanan" title="Layanan" accent="kami" lead="Layanan yang kami tawarkan untuk membantu kebutuhan digital Anda." />

    <section class="sec">
      <div class="w">
        <div class="sv rv" v-reveal>
          <div class="svm">
            <div class="ic"><AppIcon :name="main.icon" /></div>
            <h3>{{ main.title }}</h3>
            <p>{{ main.desc }}</p>
          </div>
          <ul class="svl">
            <li v-for="(item, i) in main.items" :key="item">
              <span class="svi"><AppIcon :name="serviceItemIcons[i]" /></span>
              <b>{{ item }}</b>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        <h2 class="rv" v-reveal>Cara kerja</h2>
        <StepsGrid extra-class="tl" />
      </div>
    </section>

    <CtaBand />
  </div>
</template>