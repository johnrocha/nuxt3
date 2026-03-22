<template>
  <div>
    <div
      v-if="showIntroScreen"
      ref="introOverlayRef"
      class="intro-overlay fixed inset-0 z-[9999] overflow-hidden bg-white"
    >
      <div ref="introSceneRef" class="intro-scene-layer">
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
          style="bottom: 20px; right: 20px; width: 145px; height: 44px;"
        />
      </div>

      <div ref="introGlowRef" class="intro-glow-layer" aria-hidden="true" />

      <div
        ref="introContentRef"
        class="relative z-10 container-site flex min-h-screen items-center py-16 pointer-events-none md:py-24 lg:py-28"
      >
        <div class="max-w-2xl space-y-10 bg-white/0 pointer-events-auto">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <img :src="brand.logo" alt="Logo Inspiring" class="h-10 w-auto md:h-12" />
            <div>
              <p class="font-display text-2xl font-bold text-brand-950 md:text-3xl">{{ brand.name }}</p>
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{{ brand.tagline }}</p>
            </div>
          </NuxtLink>

          <div class="max-w-2xl space-y-6">
            <h1 class="font-display text-5xl font-bold leading-[1.05] text-slate-900 md:text-7xl">
              Construa um novo Futuro para sua Empresa
            </h1>
            <p class="text-xl leading-relaxed text-slate-700 md:text-[2.1rem] md:leading-snug">
              Integre praticas de IA personalizadas a qualquer um dos seus processos de negocios.
            </p>
          </div>

          <button
            type="button"
            @click="openSite"
            :disabled="isTransitioning"
            class="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2f63ff] to-[#3f84ff] px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
          >
            <span>Começar o novo</span>
            <span class="text-2xl leading-none">></span>
          </button>
        </div>
      </div>
    </div>

    <div
      ref="homeShellRef"
      class="home-shell"
      :class="{ 'home-shell--covered': showIntroScreen }"
      :aria-hidden="showIntroScreen ? 'true' : 'false'"
      :inert="showIntroScreen"
    >
      <section class="section-spacing bg-slate-50">
        <div class="container-site">
          <div class="mb-12 max-w-4xl space-y-4">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Valor entregue</p>
            <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Conteudo estrategico para orientar crescimento
            </h2>
          </div>

          <div class="grid gap-8 md:grid-cols-3">
            <article v-for="metric in homeMetrics" :key="metric.label" class="card-surface space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{{ metric.label }}</p>
              <h3 class="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{{ metric.value }}</h3>
              <p class="text-base leading-relaxed text-slate-600">{{ metric.helper }}</p>
            </article>
          </div>
        </div>
      </section>

      <FeatureHighlights :items="homeHighlights" />

      <section class="section-spacing bg-slate-100/70">
        <div class="container-site">
          <div class="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div class="max-w-4xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Solucoes</p>
              <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Plataformas e consultoria para cada desafio
              </h2>
            </div>
            <NuxtLink to="/solucoes" class="btn-outline w-fit">Explorar soluções</NuxtLink>
          </div>

          <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <SolutionCard v-for="solution in solutionCards" :key="solution.slug" :solution="solution" />
          </div>
        </div>
      </section>

      <section class="section-spacing bg-white">
        <div class="container-site">
          <div class="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div class="max-w-4xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Cases aprovados</p>
              <h2 class="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Resultados construidos com grandes marcas
              </h2>
            </div>
            <NuxtLink to="/cases" class="btn-outline w-fit">Ver todos os cases</NuxtLink>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <CaseCard v-for="item in homeCases" :key="item.name" :item="item" />
          </div>
        </div>
      </section>

      <CallToActionStrip
        title="Escolha o proximo avanco da sua operacao"
        description="Ativamos estrategias para IEP, Varfarma e consultoria com foco em conversao, fidelizacao e eficiencia operacional."
        :ctas="primaryCtaLinks"
      />
    </div>
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
const introSeenStorageKey = "inspiring_intro_seen_v1";

const showIntroScreen = ref(true);
const isTransitioning = ref(false);
const prefersReducedMotion = ref(false);

const introOverlayRef = ref<HTMLElement | null>(null);
const introSceneRef = ref<HTMLElement | null>(null);
const introGlowRef = ref<HTMLElement | null>(null);
const introContentRef = ref<HTMLElement | null>(null);
const homeShellRef = ref<HTMLElement | null>(null);

let gsapInstance: typeof import("gsap").gsap | null = null;
let exitTimeline: import("gsap").core.Timeline | null = null;
let introParallaxCleanup: (() => void) | null = null;
let motionQuery: MediaQueryList | null = null;
let motionQueryHandler: ((event: MediaQueryListEvent) => void) | null = null;

const hasSeenIntro = () => {
  if (!import.meta.client) return false;

  try {
    return window.sessionStorage.getItem(introSeenStorageKey) === "1";
  } catch {
    return false;
  }
};

const markIntroSeen = () => {
  if (!import.meta.client) return;

  try {
    window.sessionStorage.setItem(introSeenStorageKey, "1");
  } catch {
    // Silent fail for environments where sessionStorage is unavailable.
  }
};

const ensureGsap = async () => {
  if (gsapInstance) return gsapInstance;

  try {
    const { gsap } = await import("gsap");
    gsapInstance = gsap;
  } catch {
    gsapInstance = null;
  }

  return gsapInstance;
};

const lockBodyScroll = (locked: boolean) => {
  if (!import.meta.client) return;
  document.body.style.overflow = locked ? "hidden" : "";
};

const clearParallax = () => {
  introParallaxCleanup?.();
  introParallaxCleanup = null;
};

const initParallax = () => {
  clearParallax();

  if (!import.meta.client || prefersReducedMotion.value || !gsapInstance) {
    return;
  }

  const overlay = introOverlayRef.value;
  const scene = introSceneRef.value;
  const glow = introGlowRef.value;
  const content = introContentRef.value;

  if (!overlay || !scene || !glow || !content) {
    return;
  }

  const sceneX = gsapInstance.quickTo(scene, "x", { duration: 0.8, ease: "power3.out" });
  const sceneY = gsapInstance.quickTo(scene, "y", { duration: 0.8, ease: "power3.out" });
  const glowX = gsapInstance.quickTo(glow, "x", { duration: 0.9, ease: "power3.out" });
  const glowY = gsapInstance.quickTo(glow, "y", { duration: 0.9, ease: "power3.out" });
  const contentX = gsapInstance.quickTo(content, "x", { duration: 0.6, ease: "power2.out" });
  const contentY = gsapInstance.quickTo(content, "y", { duration: 0.6, ease: "power2.out" });

  const onPointerMove = (event: PointerEvent) => {
    const bounds = overlay.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    sceneX(relativeX * 24);
    sceneY(relativeY * 16);
    glowX(relativeX * 42);
    glowY(relativeY * 32);
    contentX(relativeX * 14);
    contentY(relativeY * 18);
  };

  const reset = () => {
    sceneX(0);
    sceneY(0);
    glowX(0);
    glowY(0);
    contentX(0);
    contentY(0);
  };

  overlay.addEventListener("pointermove", onPointerMove, { passive: true });
  overlay.addEventListener("pointerleave", reset);

  introParallaxCleanup = () => {
    overlay.removeEventListener("pointermove", onPointerMove);
    overlay.removeEventListener("pointerleave", reset);
    reset();
  };
};

const finalizeIntroExit = () => {
  clearParallax();

  if (gsapInstance) {
    gsapInstance.set(
      [introSceneRef.value, introGlowRef.value, introContentRef.value, homeShellRef.value],
      {
        clearProps: "transform,opacity,will-change",
      },
    );
  }

  showIntroScreen.value = false;
  isTransitioning.value = false;
  lockBodyScroll(false);
  markIntroSeen();

  exitTimeline?.kill();
  exitTimeline = null;
};

const openSite = async () => {
  if (isTransitioning.value || !showIntroScreen.value) {
    return;
  }

  isTransitioning.value = true;
  await ensureGsap();

  if (
    !import.meta.client ||
    !gsapInstance ||
    prefersReducedMotion.value ||
    !introOverlayRef.value ||
    !introSceneRef.value ||
    !introGlowRef.value ||
    !introContentRef.value ||
    !homeShellRef.value
  ) {
    finalizeIntroExit();
    return;
  }

  gsapInstance.set(
    [introSceneRef.value, introGlowRef.value, introContentRef.value, homeShellRef.value],
    {
      willChange: "transform,opacity",
    },
  );
  gsapInstance.set(homeShellRef.value, { opacity: 0, y: 72, scale: 0.985 });

  exitTimeline?.kill();
  exitTimeline = gsapInstance.timeline({
    defaults: { ease: "power3.inOut" },
    onComplete: finalizeIntroExit,
  });

  exitTimeline.to(introSceneRef.value, { duration: 1.9, scale: 1.14, y: -96, opacity: 0.18 }, 0);
  exitTimeline.to(introGlowRef.value, { duration: 2.1, scale: 1.35, y: -88, opacity: 0 }, 0);
  exitTimeline.to(introContentRef.value, { duration: 1.55, y: -132, opacity: 0 }, 0.12);
  exitTimeline.to(introOverlayRef.value, { duration: 1.7, opacity: 0 }, 0.25);
  exitTimeline.to(homeShellRef.value, { duration: 1.55, y: 0, scale: 1, opacity: 1 }, 0.32);
};

watch(
  showIntroScreen,
  (isVisible) => {
    lockBodyScroll(isVisible);
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  lockBodyScroll(false);
  exitTimeline?.kill();
  exitTimeline = null;
  clearParallax();

  if (motionQuery && motionQueryHandler) {
    motionQuery.removeEventListener("change", motionQueryHandler);
  }
});

onMounted(async () => {
  if (hasSeenIntro()) {
    showIntroScreen.value = false;
  }

  await ensureGsap();

  if (showIntroScreen.value) {
    splineSceneUrl.value = `${splineSceneBaseUrl}?v=${Date.now()}`;

    if (!customElements.get("spline-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }

  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = motionQuery.matches;

  motionQueryHandler = (event: MediaQueryListEvent) => {
    prefersReducedMotion.value = event.matches;

    if (event.matches) {
      clearParallax();
      return;
    }

    if (showIntroScreen.value) {
      initParallax();
    }
  };

  motionQuery.addEventListener("change", motionQueryHandler);

  if (showIntroScreen.value && !prefersReducedMotion.value) {
    initParallax();
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

.intro-overlay {
  perspective: 1200px;
}

.intro-scene-layer {
  position: absolute;
  inset: -4%;
  transform-origin: center;
}

.intro-glow-layer {
  position: absolute;
  inset: -25%;
  z-index: 2;
  pointer-events: none;
  mix-blend-mode: screen;
  background:
    radial-gradient(circle at 20% 20%, rgba(63, 132, 255, 0.35), transparent 42%),
    radial-gradient(circle at 80% 28%, rgba(255, 77, 166, 0.28), transparent 45%),
    radial-gradient(circle at 50% 80%, rgba(33, 77, 255, 0.2), transparent 52%);
}

.home-shell {
  opacity: 1;
}

.home-shell--covered {
  opacity: 0;
  transform: translateY(72px) scale(0.985);
}

@media (prefers-reduced-motion: reduce) {
  .intro-glow-layer {
    opacity: 0.2;
  }

  .home-shell--covered {
    transform: none;
  }
}
</style>

