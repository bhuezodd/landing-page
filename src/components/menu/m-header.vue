<template>
  <div class="h-s/2 bg-black px-32 relative overflow-hidden">
    <div class="svg">
      <img src="@/assets/img/svgs/svg-top-2.svg" />
    </div>
    <div class="flex w-full pt-32">
      <!-- Title -->
      <div class="title xl:w-4/12 lg:w-4/12 md::w-7/12 sm:w-full sm:w-full">
        <div
          class="font-title text-title-3 leading-tight animation"
          v-show="getScroll < getHeight -100"
        >
          <div class="child text-white">Cada sabor es una nueva</div>
          <div class="child bg-yellow">experiencia</div>
        </div>
        <p
          class="font-sans text-sub-text w-9/12 text-gray-100 leading-tight mt-4 mb-24"
        >Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
        <a href="#local" class="text-3xl flex items-center link-hover w-56">
          <span class="pr-2">Encuentranos</span>
          <img src="@/assets/img/icons/arrow.svg" />
        </a>
      </div>
      <!-- burger -->
      <div v-show=" getScroll < getHeight -100" class="burger animation">
        <img src="@/assets/img/images/burger2.png" />
      </div>
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
<style lang="scss" scoped>
.title {
  position: absolute;
  top: 65%;
  left: 35%;
  transform: translate(-65%, -35%);
}
.burger {
  position: absolute;
  right: 10vw;
  top: 55%;
  transform: translate(-10%, -45%);
}
.svg {
  position: absolute;
  right: 4vw;
  top: -30vh;
  transform: translate(20%, 10%);
}
</style>