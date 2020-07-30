<template>
  <div class="h-screen p-32">
    <div class="relative w-6/12">
      <!-- Title -->
      <div class="title">
        <div
          class="font-title text-5xl leading-tight animation flex justify-center"
          v-show="$route.hash == '#restaurant' || getScroll > getHeight -100 && getScroll < getHeight *3"
        >
          <div class="child">Estamos para ti</div>
        </div>
      </div>
      <div class="flex flex-wrap h-full">
        <div class="w-full mt-4 flex">
          <div class="btn border active">
            <takeaway color="white" />
            <span class="px-2">Para llevar</span>
          </div>
          <div class="btn border">
            <devilery />
            <span class="px-2">Domicilio</span>
          </div>
        </div>
        <div class="w-full h-16 border flex justify-center items-center">
          <search />
          <input
            type="text"
            class="w-8/12 h-full font-sans text-xl px-2 focus:outline-none"
            v-model="search"
            placeholder="Buscar nombre o dirección"
          />
        </div>
        <div class="w-full max-h-full"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["text"],
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
  },
};
</script>
