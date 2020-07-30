<template>
  <div class="h-screen px-32 relative">
    <div class="flex w-full w-full items-center">
      <!-- Title -->
      <div class="title xl:w-5/12 lg:w-5/12 md::w-7/12 sm:w-full">
        <div
          class="font-title text-title leading-tight animation"
          v-show="$route.hash == '#top'  || $route.hash == '' || getScroll < getHeight -100"
        >
          <div class="child">Un nuevo sabor esta en</div>
          <div class="child bg-yellow lg:w-8/12">la ciudad</div>
        </div>
        <p
          class="font-sans text-sub-text w-9/12 text-gray-100 leading-tight mt-4 mb-24"
        >Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
        <a href="#local" class="text-3xl flex items-center link-hover w-56">
          <span class="pr-2">Encuentranos</span>
          <arrow class="w-8" />
        </a>
      </div>
      <!-- burger -->
      <div
        v-show="$route.hash == '#top'  || $route.hash == '' || getScroll < getHeight -100"
        class="burger animation"
      >
        <div class="obj">
          <burger />
        </div>
      </div>
    </div>
    <!-- SVG yellow -->
    <svg-top></svg-top>
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
.title {
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-65%, -50%);
}
.burger {
  position: absolute;
  right: 10vw;
  top: 45%;
  transform: translate(-10%, -55%);
}
</style>