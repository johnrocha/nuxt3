<template>
  <footer class="border-t border-slate-200 bg-brand-950 text-white">
    <div class="container-site py-12">
      <div class="grid gap-10 md:grid-cols-[1.5fr,1fr,1fr]">
        <div class="space-y-4">
          <NuxtLink class="inline-flex items-center gap-3" to="/">
            <img :src="brand.logo" alt="Logo Inspiring" class="h-9 w-auto" />
            <div>
              <p class="font-display text-xl font-bold">{{ brand.name }}</p>
              <p class="text-xs uppercase tracking-[0.15em] text-brand-200">{{ brand.tagline }}</p>
            </div>
          </NuxtLink>
          <p class="max-w-md text-sm text-brand-100">
            Tecnologia, dados e execução para construir crescimento consistente em jornadas digitais.
          </p>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-100">Navegação</h2>
          <ul class="space-y-2 text-sm text-brand-100">
            <li v-for="item in footerQuickLinks" :key="item.to">
              <NuxtLink :to="item.to" class="transition-colors hover:text-white">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-100">Contato</h2>
          <ul class="space-y-2 text-sm text-brand-100">
            <li>{{ contactDetails.address }}</li>
            <li>{{ contactDetails.city }}</li>
            <li>
              <a :href="`mailto:${contactDetails.email}`" class="transition-colors hover:text-white">
                {{ contactDetails.email }}
              </a>
            </li>
            <li>
              <a :href="`tel:${normalizedPhone}`" class="transition-colors hover:text-white">
                {{ contactDetails.phone }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-brand-800 pt-6 text-xs text-brand-200">
        © {{ currentYear }} Inspiring. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { brand, contactDetails, footerQuickLinks } from "~/data/site-content";

const currentYear = new Date().getFullYear();
const normalizedPhone = contactDetails.phone.replace(/[^\d+]/g, "");
</script>
