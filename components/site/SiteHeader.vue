<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div class="container-site">
      <div class="flex h-24 items-center justify-between gap-8">
        <NuxtLink class="flex items-center gap-3" to="/">
          <img :src="brand.logo" alt="Logo Inspiring" class="h-11 w-auto" />
          <div>
            <p class="font-display text-2xl font-bold text-brand-950">{{ brand.name }}</p>
            <p class="text-xs font-medium uppercase tracking-[0.18em] text-brand-500">
              {{ brand.tagline }}
            </p>
          </div>
        </NuxtLink>

        <button
          class="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Alternar menu"
          @click="toggleMenu"
        >
          <svg v-if="!menuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav class="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            class="text-base font-semibold transition-colors"
            :class="isActive(item.to) ? 'text-brand-700' : 'text-slate-600 hover:text-brand-600'"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink class="btn-primary" to="/contato">Fale com a Inspiring</NuxtLink>
        </nav>
      </div>

      <nav v-if="menuOpen" class="border-t border-slate-200 py-4 md:hidden" aria-label="Menu mobile">
        <ul class="space-y-3">
          <li v-for="item in navigationItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
              :class="isActive(item.to) ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn-primary inline-flex w-full justify-center" to="/contato" @click="menuOpen = false">
              Fale com a Inspiring
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { brand, navigationItems } from "~/data/site-content";

const menuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const isActive = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(path);
};

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);
</script>
