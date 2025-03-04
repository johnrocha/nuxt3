<template>
  <a href="#" class="flex items-center lg:justify-center" v-html="logo" />
</template>

<script setup>
defineProps({
  logo: {
    type: String,
    required: true
  }
})
</script>