<template>
  <div
    class="w-full xl:h-auto lg:h-s/7 h-screen bg-black text-white md:py-32 pb-32 pt-5 overflow-hidden"
  >
    <div class="flex flex-wrap w-full h-full py-32 justify-center" v-if="state">
      <div class="w-full flex justify-center py-2">
        <img src="@/assets/img/svgs/mail-send.svg" alt />
      </div>
      <div class="xl:w-4/12 md:w-9/12 text-center">
        <p class="xl:text-2xl md:text-3xl font-bold font-title">Gracias por tus comentarios</p>
        <p
          class="text-lg md:text-xl"
        >Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
      </div>
      <div class="w-full flex justify-center p-16">
        <a href="#menu" v-smooth-scroll>
          <button
            @click="$router.push('/menu')"
            class="slide w-64 font-sans font-bold focus:outlone-none"
          >Enviar comentario</button>
        </a>
      </div>
    </div>
    <div class="md:px-16 px-2 w-full text-center flex flex-wrap justify-center" v-if="!state">
      <div
        class="w-7/12 text-center"
        :class="getScroll > getHeight *2.5 ? 'animation' : 'not-animation'"
      >
        <p class="child font-title xl:text-4xl text-xl md:text-3xl">Cuentanos tu experiencia</p>
        <p
          class="child font-sans xl:text-3xl md:text-xl"
        >Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
      </div>

      <form @submit.prevent="handleContact">
        <validation-observer v-slot="{ valid }">
          <div class="flex w-full mt-5 flex-wrap">
            <div class="xl:w-5/12 w-full p-2">
              <validation-provider
                class="control-group flex flex-wrap w-full my-2"
                v-slot="{ errors }"
                name="name"
                rules="required"
              >
                <label class="w-full text-left text-sm pb-2" for="name">Nombre y Apellido</label>
                <input
                  name="name"
                  type="text"
                  v-model="email.name"
                  placeholder="John Doe"
                  class="control-input placeholder-white placeholder-opacity-50"
                />
                <label>{{errors[0] }}</label>
              </validation-provider>
              <validation-provider
                class="control-group flex flex-wrap w-full my-2"
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <label class="w-full text-left text-sm pb-2" for="name">Correo electrónico</label>
                <input
                  name="email"
                  type="email"
                  v-model="email.email"
                  placeholder="example@correo.com"
                  class="control-input placeholder-white placeholder-opacity-50"
                />
                <label>{{errors[0] }}</label>
              </validation-provider>
            </div>
            <validation-provider
              class="xl:w-7/12 w-full p-2"
              v-slot="{ errors }"
              name="message"
              rules="required"
            >
              <div class="control-group flex flex-wrap w-full my-2">
                <label class="w-full text-left text-sm pb-1" for="name">Mensaje</label>
                <textarea
                  v-model="email.message"
                  name="message"
                  placeholder="El día de ahora mi experiencia fue..."
                  class="control-input placeholder-white placeholder-opacity-50 h-full"
                  rows="4"
                ></textarea>
              </div>
              <label>{{errors[0] }}</label>
            </validation-provider>
            <div class="w-full flex xl:justify-end justify-center">
              <button
                :disabled="!valid"
                class="slide w-64 font-sans font-bold focus:outlone-none"
              >Enviar comentario</button>
            </div>
          </div>
        </validation-observer>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      email: {},
      state: false,
    };
  },
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
  },
  methods: {
    ...mapActions("contact", ["sendEmail"]),
    async handleContact() {
      //No funciona API
      // this.state = await this.sendEmail(this.email);
      this.state = true;
    },
  },
};
</script>