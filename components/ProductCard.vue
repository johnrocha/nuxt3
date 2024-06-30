<template>
  <div class="p-3 text-center my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white duration-300 hover:-translate-y-1 ">
    <img :src="`${product.image}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="my-4 btn text-white bg-[#9e1e61] hover:bg-[#ff3f8f] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">Ler mais</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>