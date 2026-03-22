<template>
  <div>
    <div v-if="showIntroScreen" class="fixed inset-0 z-[9999] overflow-hidden bg-white">
      <ClientOnly>
        <component
          :is="'spline-viewer'"
          :url="splineSceneUrl"
          background="transparent"
          class="spline-fullscreen"
        />
      </ClientOnly>

      <div
        class="pointer-events-none absolute z-[10000] bg-white"
        style="bottom: 20px; right: 20px; width: 137px; height: 36px;"
      />

      <div class="relative z-10 container-site flex min-h-screen items-center py-14 pointer-events-none md:py-20 lg:py-24">
        <div class="max-w-xl space-y-8 bg-white/0 pointer-events-auto">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <img :src="brand.logo" alt="Logo Inspiring" class="h-10 w-auto md:h-12" />
            <div>
              <p class="font-display text-xl font-bold text-brand-950 md:text-2xl">{{ brand.name }}</p>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{{ brand.tagline }}</p>
            </div>
          </NuxtLink>

          <div class="max-w-xl space-y-5">
            <h1 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Construa um novo Futuro para sua Empresa
            </h1>
            <p class="text-lg leading-relaxed text-slate-700 md:text-[1.85rem] md:leading-tight">
              Integre praticas de IA personalizadas a qualquer um dos seus processos de negocios.
            </p>
          </div>

          <button
            type="button"
            @click="openSite"
            class="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2f63ff] to-[#3f84ff] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5"
          >
            <span>Comecar o novo</span>
            <span class="text-2xl leading-none">></span>
          </button>
        </div>
      </div>
    </div>

    <template v-else>
      <section class="section-spacing bg-slate-50">
        <div class="container-site">
          <div class="mb-8 max-w-3xl space-y-3">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Valor entregue</p>
            <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">
              Conteudo estrategico para orientar crescimento
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
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Solucoes</p>
              <h2 class="font-display text-3xl font-bold text-slate-900 md:text-4xl">
                Plataformas e consultoria para cada desafio
              </h2>
            </div>
            <NuxtLink to="/solucoes" class="btn-outline w-fit">Explorar solucoes</NuxtLink>
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
                Resultados construidos com grandes marcas
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
        title="Escolha o proximo avanco da sua operacao"
        description="Ativamos estrategias para IEP, Varfarma e consultoria com foco em conversao, fidelizacao e eficiencia operacional."
        :ctas="primaryCtaLinks"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  approvedCases,
  brand,
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

const splineSceneBaseUrl = "https://prod.spline.design/oApt2dRFjDZuKMD8/scene.splinecode";
const splineSceneUrl = ref(splineSceneBaseUrl);

const showIntroScreen = ref(true);

const openSite = () => {
  showIntroScreen.value = false;
};

watch(
  showIntroScreen,
  (isVisible) => {
    if (!import.meta.client) {
      return;
    }

    document.body.style.overflow = isVisible ? "hidden" : "";
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  if (!import.meta.client) return;
  document.body.style.overflow = "";
});

onMounted(() => {
  splineSceneUrl.value = `${splineSceneBaseUrl}?v=${Date.now()}`;

  if (!customElements.get("spline-viewer")) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    document.head.appendChild(script);
  }
});

const homeCases = computed(() => approvedCases.slice(0, 2));
</script>

<style scoped>
.spline-fullscreen {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}
</style>

