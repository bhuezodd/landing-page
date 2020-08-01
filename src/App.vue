<template>
  <div id="app">
    <navbar @open="show = true"></navbar>
    <sidebar @close="show = false" :show="show" />
    <router-view />
    <v-footer />
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
