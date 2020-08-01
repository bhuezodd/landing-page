<template>
  <div class="text-center flex flex-wrap oveflow-hidden" :class="item.width">
    <div class="w-full flex flex-wrap justify-center">
      <div
        class="animation-text rounded-full bg-yellow w-10 h-10 flex justify-center items-center text-white font-bold"
      >{{ item.id }}</div>
    </div>
    <div class="w-full flex flex-wrap justify-center">
      <div class="w-full">
        <p
          class="font-title text-xl"
          :class="getScroll > getHeight * 4 ? 'animation-text' : 'not-animation'"
        >{{ item.title }}</p>
      </div>
      <div class="xl:w-10/12 md:w-8/12 w-1/2">
        <p
          :class="getScroll > getHeight * 4 ? 'animation-text' : 'not-animation'"
        >{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
  },
  props: ["item"],
};
</script>