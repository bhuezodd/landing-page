<template>
  <div class="relative h-screen w-full flex">
    <div class="w-4/12">
      <img src="@/assets/img/images/movil.png" class="phone" />
    </div>
    <div class="w-5/12 p-16" v-show="getScroll > getHeight * 3.6">
      <div class="w-10/12 text-center animation">
        <p class="child font-title text-4xl">Obten más beneficios</p>
        <p class="child font-title text-4xl text-3xl bg-yellow">Descarga nuestra App</p>
      </div>
      <div class="relative h-64 mt-8 flex flex-wrap justify-center items-center py-5">
        <div class="flex w-full absolute top-0 flex-wrap justify-center">
          <card-app v-for="item in paragraphs" :key="item.id" :item="item" />
        </div>
        <div class="absolute w-9/12 flex justify-between">
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
          width: "w-1/2",
          title: "Solicita rápido",
          description:
            "Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
        },
        {
          id: "02",
          width: "w-1/2",
          title: "Fácil de Usar",
          description:
            "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          id: "03",
          width: "w-1/2 mt-24",
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
.phone {
  position: absolute;
  top: -10vh;
  height: 100vh;
}
.rotate-180 {
  transform: rotateY(180deg);
}
</style>