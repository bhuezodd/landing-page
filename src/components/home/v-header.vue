<template>
  <div
    class="table md:pt-0 pt-32 xl:h-screen lg:h-s/7 md:h-s/7 sm:h-screen xl:px-32 px-2 relative overflow-hidden md:flex w-full flex-wrap md:items-center"
  >
    <div class="svg">
      <img src="@/assets/img/svgs/svg-top.svg" />
    </div>
    <!-- Title -->
    <div class="lg:w-1/2 md:w-7/12 w-full lg:px-4 table-footer-group md:pt-0 pt-16">
      <div
        class="font-title xl:text-title lg:text-title-4 md:text-title-5 text-4xl leading-tight"
        :class="getScroll < getHeight -100 ? 'animation color-last' : 'not-animation'"
      >
        <p class="child">Un nuevo sabor esta en la ciudad</p>
      </div>
      <p
        class="font-sans md:text-sub-text text-xl lg:w-9/12 md:w-10/12 w-full text-gray-100 leading-tight mt-4 lg:mb-24 mb-16"
      >Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
      <a
        v-smooth-scroll
        href="#restaurant"
        class="text-3xl flex items-center link-hover xl:w-5/12 lg:w-8/12 md:w-10/12 w-11/12 font-bold"
      >
        <span href="#restaurant" class="pr-2 font-syne">Encuentranos</span>
        <img src="@/assets/img/icons/arrow.svg" />
      </a>
    </div>
    <!-- burger -->
    <div class="lg:w-1/2 md:w-5/12 w-full flex md:justify-end justify-center md:items-center">
      <img src="@/assets/img/images/burger1.png" class="burger" />
    </div>
    <!-- SVG yellow -->
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