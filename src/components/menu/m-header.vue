<template>
  <div
    class="table md:pt-0 py-32 xl:h-s/7 md:h-s/5 h-screen xl:px-32 px-2 relative overflow-hidden md:flex w-full flex-wrap md:items-center bg-black text-white"
  >
    <div class="svg menu">
      <img src="@/assets/img/svgs/svg-top-2.svg" />
    </div>
    <!-- Title -->
    <div class="lg:w-1/2 md:w-7/12 w-full lg:px-4 table-footer-group md:pt-0 pt-16">
      <div
        class="font-title xl:text-title-4 lg:text-title-4 md:text-title-5 text-4xl leading-tight"
        :class="getScroll < getHeight -100 ? 'animation' : 'not-animation'"
      >
        <p class="child">Cada sabor es una nueva</p>
        <span class="child bg-yellow text-black">experiencia</span>
      </div>
    </div>
    <!-- burger -->
    <div class="lg:w-1/2 md:w-5/12 w-full flex md:justify-end justify-center md:items-center">
      <img src="@/assets/img/images/burger2.png" class="burger menu" />
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