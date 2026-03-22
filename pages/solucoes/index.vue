<template>
  <div>
    <PageHero
      eyebrow="Portfólio Inspiring"
      title="Soluções para engajamento, fidelização e crescimento sustentável"
      description="Combinamos plataforma, inteligência comercial e consultoria para evoluir jornada, recorrência e eficiência operacional."
      :image="heroImage"
      image-alt="Soluções digitais Inspiring"
      :ctas="heroCtas"
    />

    <section class="section-spacing bg-white">
      <div class="container-site">
        <div class="mb-12 max-w-4xl space-y-4">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Nossas frentes</p>
          <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Soluções conectadas ao resultado do negócio
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <SolutionCard v-for="solution in solutionCards" :key="solution.slug" :solution="solution" />
        </div>
      </div>
    </section>

    <section class="section-spacing bg-slate-100/80">
      <div class="container-site">
        <div class="grid gap-8 md:grid-cols-3">
          <article class="card-surface">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Diagnóstico</p>
            <h3 class="mt-3 font-display text-2xl font-semibold text-slate-900">Onde atuar primeiro</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-600">Mapeamos gargalos de jornada e priorizamos alavancas com maior retorno potencial.</p>
          </article>
          <article class="card-surface">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Implementação</p>
            <h3 class="mt-3 font-display text-2xl font-semibold text-slate-900">Execução integrada</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-600">Conectamos dados, processos e equipes para reduzir atrito operacional e acelerar entregas.</p>
          </article>
          <article class="card-surface">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Escala</p>
            <h3 class="mt-3 font-display text-2xl font-semibold text-slate-900">Ganho contínuo</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-600">Evoluímos indicadores com ciclos de melhoria para manter consistência de performance.</p>
          </article>
        </div>
      </div>
    </section>

    <CallToActionStrip
      title="Escolha a solução certa para sua meta"
      description="Nosso time ajuda a definir a melhor combinação entre plataforma e consultoria para seu momento de negócio."
      :ctas="heroCtas"
    />
  </div>
</template>

<script setup lang="ts">
import heroImage from "~/images/dashboard1.png";
import { seoByRoute, solutionCards } from "~/data/site-content";

const heroCtas = [
  { label: "Falar com especialista", to: "/contato", variant: "primary" as const },
  { label: "Ver cases", to: "/cases", variant: "outline" as const },
];

useSeoMeta({
  title: seoByRoute.solucoes.title,
  description: seoByRoute.solucoes.description,
});
</script>
