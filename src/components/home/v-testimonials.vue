<template>
  <div class="h-screen pt-24 relative">
    <div class="w-full h-full flex justify-between items-center">
      <div class="absolute w-full flex justify-center">
        <carousel :per-page="1" :autoplay="true">
          <slide v-for="item in testimonials" :key="item.title">
            <div class="w-full text-center">
              <div class="w-full flex justify-center">
                <p class="font-title w-1/2 text-3xl">"{{item.title}}"</p>
              </div>
              <div class="w-full flex justify-center">
                <p class="font-sans w-4/12 text-gray-100">{{item.footer}}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <img src="@/assets/img/svgs/sauce.svg" class="h-full relative" />
      <img src="@/assets/img/svgs/sauce.svg" class="rotate-suace h-full mt-32 relative" />
      <img src="@/assets/img/images/ketchup.png" class="tomato" />
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      testimonials: [
        {
          title: "El mejor lugar para degustar en familia y amigos!",
          footer:
            "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.",
        },
        {
          title: "El sitio perfecto para pasarla con tus seres queridos!",
          footer:
            "Invitamos a mi padre a comer por su cumpleaños ¡Vaya que lo disfruto! Cada semana nos reunimos para ir a comer a foodies",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.rotate-suace {
  transform: rotate(180deg);
}
.tomato {
  position: absolute;
  width: 30%;
  top: 4rem;
  right: 0;
}
</style>