<template>
  <div
    class="w-full mr-5 px-5 py-5 lg:hidden block px-5 fixed z-50 rounded-b-lg"
    v-show="show"
    :class="[ $route.path == '/menu' ? 'text-white bg-black' : 'text-black bg-white' ]"
  >
    <div class="w-full flex justify-between">
      <a
        @click="$router.push('/'), close()"
        v-smooth-scroll
        class="w-auto xl:mr-32 lg:mr-10 xl:text-3xl lg:text-2xl mr-5 text-2xl font-title"
        href="#top"
      >Foodies</a>
      <div class="lg:hidden block">
        <v-icon-menu
          @click="close()"
          icon="x"
          :color=" $route.path == '/menu' ? 'white' : 'black'"
        />
      </div>
    </div>
    <div class="py-4">
      <a
        @click="$router.push('/'), close()"
        href="#about"
        v-smooth-scroll
        class="text-2xl"
        :class="show ? '' : 'hidden'"
      >Acerca de</a>
    </div>
    <div class="py-4">
      <a
        @click="$router.push('/'), close()"
        href="#restaurant"
        v-smooth-scroll
        class="text-2xl"
        :class="show ? '' : 'hidden'"
      >Restaurant</a>
    </div>
    <div class="py-4">
      <a
        @click="$router.push('/menu'),close()"
        href="#menu"
        v-smooth-scroll
        class="text-2xl"
        :class="show ? '' : 'hidden'"
      >Menú</a>
    </div>
    <div class="py-4">
      <a
        @click="$router.push('/'), close()"
        href="#contact"
        v-smooth-scroll
        class="text-2xl"
        :class="show ? '' : 'hidden'"
      >Contáctanos</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>