<template>
  <div
    class="xl:px-32 lg:px-20 px-5 w-full h-20 flex items-center font-syne fixed z-50 lg:justify-start justify-between"
    :class="[getScroll > 100?  'bg-gray-200 text-yellow' : '', $route.path == '/menu' ? 'text-white' : 'text-black' ]"
  >
    <a
      @click="$router.push('/')"
      v-smooth-scroll
      class="w-auto xl:mr-32 lg:mr-10 xl:text-3xl lg:text-2xl mr-5 text-2xl font-title"
      href="#top"
    >Foodies</a>
    <a
      @click="$router.push('/')"
      href="#about"
      v-smooth-scroll
      class="xl:mr-16 lg:mr-10 lg:text-2xl lg:block hidden link-hover"
    >Acerca de</a>
    <a
      @click="$router.push('/')"
      href="#restaurant"
      v-smooth-scroll
      class="xl:mr-16 lg:mr-10 lg:text-2xl lg:block hidden link-hover"
    >Restaurant</a>
    <a
      @click="$router.push('/menu')"
      href="#menu"
      v-smooth-scroll
      class="xl:mr-16 lg:mr-10 lg:text-2xl lg:block hidden link-hover"
    >Menú</a>
    <a
      @click="$router.push('/')"
      href="#contact"
      v-smooth-scroll
      class="xl:mr-16 lg:mr-10 lg:text-2xl lg:block hidden link-hover"
    >Contáctanos</a>
    <div class="lg:hidden block">
      <v-menu
        @click="$emit('open')"
        icon="menu"
        :color="$route.path == '/menu' ? 'white' : 'black'"
      />
    </div>
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