<template>
  <article class="card-surface h-full">
    <div class="mb-4 flex items-center justify-between gap-4">
      <h3 class="font-display text-2xl font-bold text-slate-900">{{ item.name }}</h3>
      <span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
        {{ item.sector }}
      </span>
    </div>

    <p class="text-sm leading-relaxed text-slate-600">{{ item.summary }}</p>

    <div class="mt-5 rounded-2xl border border-brand-100 bg-brand-50/40 p-4">
      <p class="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">Impacto observado</p>
      <p class="mt-2 text-sm font-medium text-slate-700">{{ item.impact }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { CaseCardData } from "~/types/site";

defineProps<{
  item: CaseCardData;
}>();
</script>
