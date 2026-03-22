<template>
  <div>
    <PageHero
      :eyebrow="homeHero.eyebrow"
      :title="homeHero.title"
      :description="homeHero.description"
      :image="homeHero.image"
      image-alt="Time Inspiring conduzindo estratégia digital"
      :ctas="homeHero.ctas"
    />

    <section class="section-spacing bg-slate-50">
      <div class="container-site">
        <div class="mb-8 max-w-3xl space-y-3">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Valor entregue</p>
          <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Conteúdo estratégico para orientar crescimento
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="metric in homeMetrics" :key="metric.label" class="card-surface space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{{ metric.label }}</p>
            <h3 class="font-display text-2xl font-bold text-slate-900">{{ metric.value }}</h3>
            <p class="text-sm leading-relaxed text-slate-600">{{ metric.helper }}</p>
          </article>
        </div>
      </div>
    </section>

    <FeatureHighlights :items="homeHighlights" />

    <section class="section-spacing bg-slate-100/70">
      <div class="container-site">
        <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl space-y-3">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Soluções</p>
            <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">
              Plataformas e consultoria para cada desafio
            </h2>
          </div>
          <NuxtLink to="/solucoes" class="btn-outline w-fit">Explorar soluções</NuxtLink>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SolutionCard v-for="solution in solutionCards" :key="solution.slug" :solution="solution" />
        </div>
      </div>
    </section>

    <section class="section-spacing bg-white">
      <div class="container-site">
        <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl space-y-3">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Cases aprovados</p>
            <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">
              Resultados construídos com grandes marcas
            </h2>
          </div>
          <NuxtLink to="/cases" class="btn-outline w-fit">Ver todos os cases</NuxtLink>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <CaseCard v-for="item in homeCases" :key="item.name" :item="item" />
        </div>
      </div>
    </section>

    <CallToActionStrip
      title="Escolha o próximo avanço da sua operação"
      description="Ativamos estratégias para IEP, Varfarma e consultoria com foco em conversão, fidelização e eficiência operacional."
      :ctas="primaryCtaLinks"
    />
  </div>
</template>

<script setup lang="ts">
import {
  approvedCases,
  homeHero,
  homeHighlights,
  homeMetrics,
  primaryCtaLinks,
  seoByRoute,
  solutionCards,
} from "~/data/site-content";

useSeoMeta({
  title: seoByRoute.home.title,
  description: seoByRoute.home.description,
});

const homeCases = computed(() => approvedCases.slice(0, 2));
</script>
