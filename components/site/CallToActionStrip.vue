<template>
  <section class="bg-brand-950 py-20 text-white md:py-24">
    <div class="container-site">
      <div class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div class="max-w-3xl space-y-3">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Próximo passo</p>
          <h2 class="font-display text-4xl font-bold leading-tight md:text-5xl">{{ title }}</h2>
          <p class="text-base leading-relaxed text-brand-100 md:text-lg">{{ description }}</p>
        </div>

        <div class="flex flex-wrap gap-4">
          <NuxtLink
            v-for="cta in ctas"
            :key="cta.label + cta.to"
            :to="cta.to"
            class="rounded-full px-6 py-3.5 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            :class="buttonClass(cta.variant)"
          >
            {{ cta.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ButtonVariant, CtaLink } from "~/types/site";

defineProps<{
  title: string;
  description: string;
  ctas: CtaLink[];
}>();

const buttonClass = (variant: ButtonVariant | undefined) => {
  if (variant === "outline") {
    return "border border-white text-white hover:bg-white hover:text-brand-950";
  }

  if (variant === "secondary") {
    return "bg-white text-brand-950 hover:bg-brand-100";
  }

  return "bg-brand-500 text-white hover:bg-brand-400";
};
</script>
