<template>
  <article class="card-surface flex h-full flex-col overflow-hidden">
    <div class="aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200">
      <img :src="solution.image" :alt="`Imagem da solução ${solution.name}`" class="h-full w-full object-cover" loading="lazy" />
    </div>

    <div class="mt-6 flex flex-1 flex-col">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{{ solution.summary }}</p>
      <h3 class="mt-3 font-display text-3xl font-bold leading-tight text-slate-900">{{ solution.name }}</h3>
      <p class="mt-4 text-base leading-relaxed text-slate-600">{{ solution.description }}</p>

      <ul class="mt-5 space-y-3 text-base text-slate-700">
        <li v-for="item in solution.highlights" :key="item" class="flex items-start gap-2">
          <span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
          <span>{{ item }}</span>
        </li>
      </ul>

      <NuxtLink :to="`/solucoes/${solution.slug}`" class="btn-secondary mt-8 inline-flex w-fit">
        Ver detalhes
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { SolutionCardData } from "~/types/site";

defineProps<{
  solution: SolutionCardData;
}>();
</script>
