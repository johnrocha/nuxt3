<template>
  <div>
    <PageHero
      eyebrow="Projetos aprovados"
      title="Cases que traduzem estratégia em impacto"
      description="Atuamos com empresas que precisam evoluir relacionamento e performance com consistência operacional e foco no cliente."
      :image="heroImage"
      image-alt="Representação de cases inspiradores"
      :ctas="heroCtas"
    />

    <section class="section-spacing bg-white">
      <div class="container-site">
        <div class="mb-8 max-w-3xl space-y-3">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Clientes em destaque</p>
          <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Projetos já validados para publicação
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <CaseCard v-for="item in approvedCases" :key="item.name" :item="item" />
        </div>
      </div>
    </section>

    <CallToActionStrip
      title="Quer transformar sua jornada em um próximo case?"
      description="Vamos mapear oportunidades e construir um plano de execução orientado a resultado para o seu contexto."
      :ctas="heroCtas"
    />
  </div>
</template>

<script setup lang="ts">
import heroImage from "~/images/giphy3.gif";
import { approvedCases, seoByRoute } from "~/data/site-content";

const heroCtas = [
  { label: "Entrar em contato", to: "/contato", variant: "primary" as const },
  { label: "Conhecer soluções", to: "/solucoes", variant: "outline" as const },
];

useSeoMeta({
  title: seoByRoute.cases.title,
  description: seoByRoute.cases.description,
});
</script>
