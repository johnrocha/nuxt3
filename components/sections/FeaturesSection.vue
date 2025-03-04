<template>
  <section class="bg-gradient-to-r from-blue-950 to-blue-800" id="feats">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white">
          Cocriando Soluções Personalizadas Para Sua Empresa Impulsionar O
          Digital
        </h2>
        <p class="mb-5 font-light text-white sm:text-xl">
          Aqui na <b>Inspiring</b> nos concentramos em mercados onde tecnologia,
          inovação, e o capital podem desbloquear valor a longo prazo e
          impulsionar o crescimento do seu negócio.
        </p>
      </div>
      <div
        class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
      >
        <!-- Cards -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="max-w-sm bg-[#262d57] border border-[#262d57] rounded-lg shadow"
        >
          <a href="#">
            <img
              class="rounded-t-lg"
              :src="feature.image"
              :alt="feature.title"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ feature.title }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import giphy2 from "../../images/giphy2.gif";
import giphy from "../../images/giphy.gif";
import giphy22 from "../../images/giphy22.gif";

const features = [
  {
    title: "Analytics",
    image: giphy2,
    description:
      "Os serviços de Analytics e Big Data da Inspiring são projetados para capacitar o seu negócio. Fornecemos uma visão holística dos dados da sua empresa e insights acionáveis. Aproveitando as melhores práticas líderes do setor para governança de dados, trabalhamos para fornecer soluções de estratégia, organização, visualização e modelagem preditiva de dados.",
  },
  {
    title: "Inteligência Artificial",
    image: giphy,
    description:
      "Com nossa estratégia digital, fornecemos ampla cobertura e suporte para todos os seus desafios digitais, garantindo que você esteja sempre à frente do jogo.",
  },
  {
    title: "Marketing Digital",
    image: giphy22,
    description:
      "Quando marketing e tecnologia colidem, surgem ideias de ponta. Conecte-se com seu público no momento certo, aproveitando soluções testadas e aprovadas por criativos, apoiadas por ciência de dados, tecnologia e estratégia.",
  },
];
</script>
