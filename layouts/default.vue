<template>
  <div>
    <header class="fixed w-full">
      <nav
        class="bg-gradient-to-r from-blue-800 to-pink-600 border-gray-200 py-2.5"
      >
        <div
          class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
        >
          <nuxt-link href="#home" class="flex items-center">
            <img
              src="../images/logoiep.png"
              class="h-6 mr-3 sm:h-9"
              alt="Inspiring Logo"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap text-white"
              >Inspiring</span
            >
          </nuxt-link>
          <div class="flex items-center lg:order-2">
            <!-- <div class="hidden mt-2 mr-4 sm:inline-block">
              <a
                class="github-button"
                href="https://github.com/johnrocha"
                data-size="large"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="institutional inspiring"
                >Star</a
              >
            </div> -->
            <!-- <a
              href="#"
              class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 focus:outline-none"
              >Log in</a
            > -->
            <a
              href="https://github.com/johnrocha"
              class="text-white bg-green-400 hover:bg-green-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
              >Contate-nos</a
            >
          </div>
          <div
            class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white"
            >
              <li>
                <nuxt-link
                  href="#home"
                  class="block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 lg:hover:text-green-400"
                  aria-current="page"
                  >Home</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  href="#company"
                  class="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-400 lg:p-0"
                  >Company</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  href="#ceo"
                  class="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-400 lg:p-0"
                  >CEO</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  href="#feats"
                  class="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-400 lg:p-0"
                  >Features</nuxt-link
                >
              </li>
              <!-- <li>
                <nuxt-link
                  href="#"
                  class="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-400 lg:p-0"
                  >Team</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  href="#"
                  class="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-400 lg:p-0"
                  >Contact</nuxt-link
                >
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
