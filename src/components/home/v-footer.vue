<template>
  <div class="mb-20 w-full">
    <div class="w-full flex flex-wrap lg:px-24 px-4">
      <div class="md:w-1/2 w-full flex items-end md:justify-start justify-center">
        <span class="w-auto text-2xl text-gray-200 font-title">Foodies</span>
      </div>
      <div class="md:w-1/2 w-full flex md:justify-end justify-center">
        <img src="@/assets/img/svgs/apple.svg" class="md:w-3/12 w-4/12 mx-2" />
        <img src="@/assets/img/svgs/google.svg" class="md:w-3/12 w-4/12 mx-2" />
      </div>
    </div>
    <div class="line"></div>
    <div class="font-sans flex flex-wrap text-center">
      <a
        href="#restaurant"
        v-smooth-scroll
        class="text-gray-200 text-m lg:w-2/12 md:w-4/12 w-full mt-2"
      >Conoce nuestras sucursales</a>
      <a
        href="#about"
        v-smooth-scroll
        class="text-gray-200 text-m lg:w-2/12 md:w-4/12 w-full mt-2"
      >Acerca de</a>
      <a
        href="#restaurant"
        v-smooth-scroll
        class="text-gray-200 text-m lg:w-2/12 md:w-4/12 w-full mt-2"
      >Conoce nuestras sucursales</a>
      <a
        href="#testimonials"
        v-smooth-scroll
        class="text-gray-200 text-m lg:w-2/12 md:w-4/12 w-full mt-2"
      >¿Qué hablan de nosotros?</a>
      <a
        href="#contact"
        v-smooth-scroll
        class="text-gray-200 text-m lg:w-2/12 md:w-4/12 w-full mt-2"
      >Contáctanos</a>
    </div>
  </div>
</template>