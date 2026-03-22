<template>
  <section class="section-spacing bg-white">
    <div class="container-site">
      <div class="mb-14 max-w-4xl space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Diferenciais</p>
        <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          O que nos diferencia na prática
        </h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <article
          v-for="item in items"
          :key="item.title"
          class="card-surface space-y-5"
        >
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
            <svg v-if="item.icon === 'bolt'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <svg v-else-if="item.icon === 'network'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 6h6M9 18h6M7 9v6m10-6v6M5 12h14" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 9l2 2-2 2m4-9l4 4-4 4M4 12h9" />
            </svg>
          </span>
          <h3 class="font-display text-2xl font-semibold text-slate-900">{{ item.title }}</h3>
          <p class="text-base leading-relaxed text-slate-600">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HighlightItem } from "~/types/site";

defineProps<{
  items: HighlightItem[];
}>();
</script>
