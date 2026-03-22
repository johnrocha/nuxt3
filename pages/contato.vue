<template>
  <div>
    <PageHero
      eyebrow="Contato"
      title="Converse com a Inspiring"
      description="Conte o desafio da sua operação e direcionamos sua solicitação para o time mais adequado."
      :image="heroImage"
      image-alt="Equipe colaborando em soluções digitais"
      :ctas="heroCtas"
    />

    <section class="section-spacing bg-white">
      <div class="container-site">
        <div class="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <aside class="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Endereço</p>
              <p class="mt-2 text-sm text-slate-700">{{ contactDetails.address }}</p>
              <p class="text-sm text-slate-700">{{ contactDetails.city }}</p>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">E-mail</p>
              <a class="mt-2 inline-block text-sm font-medium text-brand-700 hover:text-brand-600" :href="`mailto:${contactDetails.email}`">
                {{ contactDetails.email }}
              </a>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Telefone</p>
              <a class="mt-2 inline-block text-sm font-medium text-brand-700 hover:text-brand-600" :href="`tel:${normalizedPhone}`">
                {{ contactDetails.phone }}
              </a>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Horário comercial</p>
              <p class="mt-2 text-sm text-slate-700">{{ contactDetails.businessHours }}</p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import heroImage from "~/images/dashboard.png";
import { contactDetails, seoByRoute } from "~/data/site-content";

const heroCtas = [
  { label: "Ver soluções", to: "/solucoes", variant: "outline" as const },
  { label: "Conhecer cases", to: "/cases", variant: "secondary" as const },
];

const normalizedPhone = contactDetails.phone.replace(/[^\d+]/g, "");

useSeoMeta({
  title: seoByRoute.contato.title,
  description: seoByRoute.contato.description,
});
</script>
