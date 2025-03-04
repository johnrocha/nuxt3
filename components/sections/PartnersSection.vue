<template>
  <section class="bg-gradient-to-r from-blue-950 to-blue-800">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-4">
        <PartnerLogo 
          v-for="(logo, index) in logos" 
          :key="index"
          :logo="logo"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PartnerLogo from '../ui/PartnerLogo.vue'
import { logos } from '@/data/partner-logos'
</script>