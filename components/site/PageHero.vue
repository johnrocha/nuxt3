<template>
  <section class="bg-surface-strong text-white">
    <div class="container-site section-spacing">
      <div class="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
        <div class="space-y-6">
          <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            {{ eyebrow }}
          </p>
          <h1 class="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {{ title }}
          </h1>
          <p class="max-w-2xl text-base leading-relaxed text-brand-100 md:text-lg">
            {{ description }}
          </p>

          <div v-if="ctas.length" class="flex flex-wrap gap-3 pt-2">
            <NuxtLink
              v-for="cta in ctas"
              :key="cta.label + cta.to"
              :to="cta.to"
              class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              :class="buttonClass(cta.variant)"
            >
              {{ cta.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-brand-500/30 blur-2xl" />
          <div class="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand-300/20 blur-2xl" />
          <div class="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
            <img
              :src="image"
              :alt="imageAlt"
              class="h-full w-full rounded-2xl object-cover"
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
