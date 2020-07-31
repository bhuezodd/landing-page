<template>
  <div
    class="px-32 w-full h-20 flex items-center font-syne fixed z-50"
    :class="getScroll > 100?  'bg-gray-200 text-yellow' : ''"
  >
    <a href="#top" v-smooth-scroll class="w-auto mr-32 text-4xl font-title">Foodies</a>
    <a href="#about" v-smooth-scroll class="mr-16 text-2xl link-hover">Acerca de</a>
    <a href="#restaurant" v-smooth-scroll class="mr-16 text-2xl link-hover">Restaurant</a>
    <router-link class="mr-16 text-2xl link-hover" to="/">Menú</router-link>
    <a href="#contact" v-smooth-scroll class="mr-16 text-2xl link-hover">Contáctanos</a>
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