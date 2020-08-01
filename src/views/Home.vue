<template>
  <div class="w-screen overflow-x-hidden">
    <section id="top">
      <v-header></v-header>
    </section>
    <section id="about" class="pt-24">
      <v-about></v-about>
    </section>
    <section id="restaurant">
      <v-restaurant></v-restaurant>
    </section>
    <section id="testimonials">
      <v-testimonials></v-testimonials>
    </section>
    <section id="contact">
      <v-contact></v-contact>
    </section>
    <section id="info">
      <v-info></v-info>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
