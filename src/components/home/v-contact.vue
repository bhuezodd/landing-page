<template>
  <div class="w-full bg-black text-white py-32 flex flex-wrap justify-center">
    <div class="w-7/12 text-center flex flex-wrap justify-center">
      <div class="w-10/12 text-center animation" v-show="getScroll > getHeight * 3">
        <p class="child font-title text-4xl">Cuentanos tu experiencia</p>
        <p
          class="child font-sans text-3xl"
        >Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
      </div>

      <form @submit.prevent="handleContact" class="flex w-full mt-10 flex-wrap">
        <div class="w-5/12 p-2">
          <div class="control-group flex flex-wrap w-full my-2">
            <label class="w-full text-left text-sm pb-2" for="name">Nombre y Apellido</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              class="control-input placeholder-white placeholder-opacity-50"
            />
          </div>
          <div class="control-group flex flex-wrap w-full my-2">
            <label class="w-full text-left text-sm pb-2" for="name">Correo electrónico</label>
            <input
              name="name"
              type="email"
              placeholder="example@correo.com"
              class="control-input placeholder-white placeholder-opacity-50"
            />
          </div>
        </div>
        <div class="w-7/12 p-2">
          <div class="control-group flex flex-wrap w-full my-2">
            <label class="w-full text-left text-sm pb-1" for="name">Correo Electronico</label>
            <textarea
              placeholder="El día de ahora mi experiencia fue..."
              class="control-input placeholder-white placeholder-opacity-50 h-full"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div class="w-full flex justify-end">
          <button class="slide w-64 font-sans font-bold focus:outlone-none">Enviar comentario</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
  },
  methods: {
    handleContact() {},
  },
};
</script>