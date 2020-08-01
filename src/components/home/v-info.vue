<template>
  <div class="relative flex flex-wrap xl:justify-start justify-center">
    <div class="xl:w-5/12 w-full xl:h-screen h-s/3">
      <img src="@/assets/img/images/movil.png" class="phone xl:w-7/12 w-full" />
    </div>
    <div
      class="xl:w-6/12 lg:w-8/12 md:w-11/12 w-full xl:p-16 xl:pt-16 md:pt-64 md:pt-32 overflow-hidden"
    >
      <div
        class="xl:w-10/12 w-full text-center"
        :class="getScroll > getHeight *4 ? 'animation-left' : 'not-animation'"
      >
        <p class="child font-title text-3xl">Obten más beneficios</p>
        <span class="child font-title text-3xl text-3xl bg-yellow">Descarga nuestra App</span>
      </div>
      <div class="relative mt-8 flex flex-wrap justify-center items-center py-5">
        <div class="flex w-full top-0 flex-wrap justify-center">
          <v-card-app v-for="item in paragraphs" :key="item.id" :item="item" />
        </div>
        <div class="absolute w-9/12 justify-between top-0 mt-10 md:flex hidden">
          <img src="@/assets/img/svgs/arrow.svg" alt />
          <img src="@/assets/img/svgs/arrow.svg" class="rotate-180" />
        </div>
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
  data() {
    return {
      paragraphs: [
        {
          id: "01",
          width: "md:w-1/2 w-full",
          title: "Solicita rápido",
          description:
            "Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
        },
        {
          id: "02",
          width: "md:w-1/2 w-full",
          title: "Fácil de Usar",
          description:
            "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          id: "03",
          width: "md:w-1/2 w-full md:mt-24",
          title: "Promociones especiales",
          description:
            "Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
        },
      ],
    };
  },
  methods: {
    handleContact() {},
  },
};
</script>

<style lang="scss" scoped>
.rotate-180 {
  transform: rotateY(180deg);
}
</style>