<template>
  <div class="flex flex-wrap overflow-hidden">
    <div class="xl:w-6/12 w-full relative">
      <!-- Title -->
      <div class="absolute bottom-0 right-0 md:pr-6 pr-2 md:pb-16 pb-8">
        <div
          class="font-title leading-tight md:text-5xl text-4xl text-right uppercase"
          :class="getScroll > getHeight / 3 ? 'animation' : 'not-animation'"
        >
          <p class="child text-white">
            La comida es
            <span class="child text-yellow">nuestro Arte</span>
          </p>
        </div>
      </div>
      <img class="w-full" src="@/assets/img/images/picture.png" alt />
    </div>
    <div
      class="relative xl:w-6/12 md:py-0 py-6 w-full flex items-center justify-start overflow-hidden"
    >
      <div class="z-10 px-16">
        <span class="font-title md:text-2xl text-xl">¿Quién es Foodies</span>
        <p
          class="mt-6 mb-10 text-gray-100 text-xl leading-tight"
          :class="getScroll > getHeight/2 ? 'animation-text' : 'not-animation'"
        >
          Elit irure ad nulla id elit laborum nostrud mollit irure.
          Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa
          fugiat consequat culpa consectetur Lorem. Reprehenderit dolore
          culpa irure eiusmod minim occaecat et id minim ullamco.
        </p>
        <a href="#local" class="text-3xl flex items-center link-hover w-56">
          <a href="#contact" v-smooth-scroll class="pr-2">Contáctanos</a>
          <img src="@/assets/img/icons/arrow.svg" />
        </a>
      </div>
      <img src="@/assets/img/svgs/line-twist.svg" class="line-twist md:block hidden" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["text"],
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
  },
};
</script>