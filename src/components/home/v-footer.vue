<template>
  <div class="mb-20 w-full">
    <div class="w-full flex px-24">
      <div class="w-1/2 flex items-end">
        <span class="w-auto mr-32 text-2xl text-gray-200 font-title">Foodies</span>
      </div>
      <div class="w-5/12 flex justify-end">
        <img src="@/assets/img/svgs/apple.svg" />
        <img src="@/assets/img/svgs/google.svg" />
      </div>
    </div>
    <div class="line"></div>
    <div class="font-sans flex px-24">
      <a
        href="#restaurant"
        v-smooth-scroll
        class="text-gray-200 mr-6 text-md"
      >Conoce nuestras sucursales</a>
      <a href="#about" v-smooth-scroll class="text-gray-200 mr-4 text-sm">Acerca de</a>
      <a
        href="#restaurant"
        v-smooth-scroll
        class="text-gray-200 mr-6 text-md"
      >Conoce nuestras sucursales</a>
      <a
        href="#testimonials"
        v-smooth-scroll
        class="text-gray-200 mr-6 text-md"
      >¿Qué hablan de nosotros?</a>
      <a href="#contact" v-smooth-scroll class="text-gray-200 mr-4 text-md">Contáctanos</a>
    </div>
  </div>
</template>