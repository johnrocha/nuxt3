<template>
  <section class="bg-surface-strong text-white">
    <div class="container-site section-spacing">
      <div class="grid items-center gap-14 lg:grid-cols-[1.25fr,1fr] lg:gap-16">
        <div class="max-w-3xl space-y-8">
          <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            {{ eyebrow }}
          </p>
          <h1 class="font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            {{ title }}
          </h1>
          <p class="max-w-2xl text-lg leading-relaxed text-brand-100 md:text-2xl md:leading-snug">
            {{ description }}
          </p>

          <div v-if="ctas.length" class="flex flex-wrap gap-4 pt-3">
            <NuxtLink
              v-for="cta in ctas"
              :key="cta.label + cta.to"
              :to="cta.to"
              class="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              :class="buttonClass(cta.variant)"
            >
              {{ cta.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-brand-500/30 blur-3xl" />
          <div class="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-brand-300/20 blur-3xl" />
          <div class="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
            <img
              :src="image"
              :alt="imageAlt"
              class="h-full w-full rounded-[1.35rem] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ButtonVariant, CtaLink } from "~/types/site";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  ctas?: CtaLink[];
}

const props = withDefaults(defineProps<HeroProps>(), {
  eyebrow: "",
  ctas: () => [],
});

const ctas = computed(() => props.ctas ?? []);

const buttonClass = (variant: ButtonVariant | undefined) => {
  if (variant === "outline") {
    return "border border-white text-white hover:bg-white hover:text-brand-900";
  }

  if (variant === "secondary") {
    return "bg-brand-200 text-brand-950 hover:bg-white";
  }

  return "bg-brand-500 text-white hover:bg-brand-400";
};
</script>
