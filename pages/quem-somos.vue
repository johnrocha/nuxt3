<template>
  <div>
    <PageHero
      :eyebrow="aboutPage.hero.eyebrow"
      :title="aboutPage.hero.title"
      :description="aboutPage.hero.description"
      :image="aboutPage.hero.image"
      image-alt="Liderança Inspiring"
      :ctas="aboutPage.hero.ctas"
    />

    <section class="section-spacing bg-white">
      <div class="container-site">
        <div class="grid gap-14 lg:grid-cols-[1.2fr,1fr]">
          <div class="max-w-3xl space-y-8">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Quem somos</p>
            <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Crescimento com visão de negócio e execução próxima
            </h2>
            <p class="text-lg leading-relaxed text-slate-700">
              Nossa atuação combina tecnologia, estratégia e acompanhamento contínuo para transformar dados em decisões mais inteligentes.
              Crescemos ao lado de clientes que buscavam não apenas ferramentas, mas clareza de direção e consistência na entrega.
            </p>
            <p class="text-lg leading-relaxed text-slate-700">
              Com a integração à Haus, ampliamos nossa capacidade de acelerar jornadas digitais em múltiplos segmentos,
              mantendo o cuidado com cada contexto de negócio.
            </p>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Perfil de atuação</p>
            <ul class="mt-5 space-y-4 text-base text-slate-700">
              <li class="flex gap-2">
                <span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                <span>Estratégia digital orientada por dados e metas de negócio.</span>
              </li>
              <li class="flex gap-2">
                <span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                <span>Execução integrada entre marketing, produto e operações.</span>
              </li>
              <li class="flex gap-2">
                <span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                <span>Governança para escalar sem perder qualidade e velocidade.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section-spacing bg-slate-100/80">
      <div class="container-site">
        <div class="mb-12 max-w-4xl space-y-4">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Linha do tempo</p>
          <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Marcos da evolução Inspiring
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <article v-for="event in aboutPage.timeline" :key="event.title" class="card-surface h-full">
            <h3 class="font-display text-2xl font-semibold text-slate-900">{{ event.title }}</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-600">{{ event.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <CallToActionStrip
      title="Vamos construir o próximo capítulo juntos"
      description="Conheça nossos cases e agende uma conversa para identificar as oportunidades com maior potencial de impacto."
      :ctas="aboutPage.hero.ctas"
    />
  </div>
</template>

<script setup lang="ts">
import { aboutPage, seoByRoute } from "~/data/site-content";

useSeoMeta({
  title: seoByRoute.quemSomos.title,
  description: seoByRoute.quemSomos.description,
});
</script>
