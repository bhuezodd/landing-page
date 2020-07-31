<template>
  <div
    class="px-32 w-full h-20 flex items-center font-syne fixed z-50"
    :class="[getScroll > 100?  'bg-gray-200 text-yellow' : '', $route.path == '/menu' ? 'text-white' : 'text-black' ]"
  >
    <a
      @click="$router.push('/')"
      v-smooth-scroll
      class="w-auto mr-32 text-4xl font-title"
      href="#top"
    >Foodies</a>
    <a
      @click="$router.push('/')"
      href="#about"
      v-smooth-scroll
      class="mr-16 text-2xl link-hover"
    >Acerca de</a>
    <a
      @click="$router.push('/')"
      href="#restaurant"
      v-smooth-scroll
      class="mr-16 text-2xl link-hover"
    >Restaurant</a>
    <router-link class="mr-16 text-2xl link-hover" to="/menu">Menú</router-link>
    <a
      @click="$router.push('/')"
      href="#contact"
      v-smooth-scroll
      class="mr-16 text-2xl link-hover"
    >Contáctanos</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("general", ["getScroll", "getHeight"]),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions("general", ["setScroll"]),
    handleScroll(event) {
      let { scrollTop, clientHeight } = event.target.scrollingElement;
      this.setScroll({
        height: clientHeight,
        num: scrollTop,
      });
    },
  },
};
</script>