<template>
  <div>
    <div id="menu">
      <v-filters @close="show= false" :show="show" />
    </div>
    <div id="products">
      <v-menu-header></v-menu-header>
    </div>
    <v-menu @open="show = true"></v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
