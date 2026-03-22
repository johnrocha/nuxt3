<template>
  <div>
    <PageHero
      eyebrow="Solução Inspiring"
      :title="solution.name"
      :description="solution.fullDescription"
      :image="solution.heroImage"
      :image-alt="`Interface e contexto da solução ${solution.name}`"
      :ctas="heroCtas"
    />

    <section class="section-spacing bg-white">
      <div class="container-site">
        <div class="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div class="space-y-4">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Resumo da solução</p>
            <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">{{ solution.summary }}</h2>
            <p class="text-base leading-relaxed text-slate-700">{{ solution.description }}</p>
          </div>

          <div class="card-surface">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Principais capacidades</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-700">
              <li v-for="capability in solution.keyCapabilities" :key="capability" class="flex gap-2">
                <span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                <span>{{ capability }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section-spacing bg-slate-100/80">
      <div class="container-site">
        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="item in solution.highlights" :key="item" class="card-surface">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Destaque</p>
            <p class="mt-2 text-sm font-medium text-slate-700">{{ item }}</p>
          </article>
        </div>
      </div>
    </section>

    <CallToActionStrip
      :title="`Pronto para avançar com ${solution.name}?`"
      description="Agende uma conversa para desenharmos juntos a estratégia de implementação e metas de impacto."
      :ctas="heroCtas"
    />
  </div>
</template>

<script setup lang="ts">
import { seoByRoute, solutionDetails } from "~/data/site-content";

const route = useRoute();
const slugParam = Array.isArray(route.params.slug)
  ? route.params.slug[0]
  : route.params.slug;

const solution = solutionDetails[slugParam as keyof typeof solutionDetails];

if (!solution) {
  throw createError({ statusCode: 404, statusMessage: "Solução não encontrada" });
}

const heroCtas = [
  { label: "Falar com especialista", to: "/contato", variant: "primary" as const },
  { label: "Ver cases", to: "/cases", variant: "outline" as const },
];

useSeoMeta({
  title: `${solution.name} | Inspiring`,
  description: solution.description || seoByRoute.solucao.description,
});
</script>
