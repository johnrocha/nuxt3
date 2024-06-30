<template>
  <div class="bg-gradient-to-r from-blue-950 to-blue-800">
    <div>
      <header class="shadow-sm">
        <nav class="container mx-auto p-4">
          <NuxtLink
            to="/products"
            class="text-white bg-[#9e1e61] hover:bg-[#ff3f8f] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
            >INSPIRING BLOG</NuxtLink
          >
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
      <footer
        class="container mx-auto p-4 flex justify-between border-t-2 text-white bold"
      >
        <ul class="flex gap-4">
          <li><NuxtLink to="/" class="hover:bg-[#ff3f8f]">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/about" class="hover:bg-[#ff3f8f]">Sobre</NuxtLink>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: white;
}
</style>
