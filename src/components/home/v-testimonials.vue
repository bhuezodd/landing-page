<template>
  <div class="xl:h-screen h-s/6 pt-24 relative">
    <div class="w-full h-full flex justify-between items-center">
      <div class="absolute w-full flex justify-center">
        <carousel :per-page="1" :autoplay="true">
          <slide v-for="item in testimonials" :key="item.title">
            <div class="w-full text-center">
              <div class="w-full flex justify-center">
                <p class="font-title md:w-1/2 w-full md:text-3xl text-xl">"{{item.title}}"</p>
              </div>
              <div class="w-full flex justify-center">
                <p class="font-sans md:w-4/12 w-full text-gray-100">{{item.footer}}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <img src="@/assets/img/svgs/sauce.svg" class="xl:h-full h-5/12 relative md:block hidden" />
      <img
        src="@/assets/img/svgs/sauce.svg"
        class="rotate-suace xl:h-full h-5/12 mt-32 relative md:block hidden"
      />
      <img src="@/assets/img/images/ketchup.png" class="tomato xl:block hidden" />
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
</style>