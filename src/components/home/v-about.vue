<template>
  <div class="flex">
    <div class="relative w-6/12">
      <!-- Title -->
      <div class="title move-title pr-6 pb-16">
        <div
          class="font-title leading-tight text-5xl text-right animation uppercase"
          v-show="getScroll > getHeight / 2"
        >
          <div class="child text-white">La comida es</div>
          <div class="child text-yellow">nuestro Arte</div>
        </div>
      </div>
      <img class="w-full" src="@/assets/img/images/picture.png" alt />
    </div>
    <div class="relative w-6/12 flex items-center justify-start overflow-hidden">
      <div class="absolute z-10 px-16">
        <span class="font-title text-2xl">¿Quién es Foodies</span>
        <p
          class="mt-6 mb-10 text-gray-100 text-xl leading-tight animation-text"
          v-show="getScroll > getHeight / 2"
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
      <img src="@/assets/img/svgs/line-twist.svg" />
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

<style lang="scss" scoped>
.move-title {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>