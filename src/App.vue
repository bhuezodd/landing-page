<template>
  <div>
    <!-- Navbar -->
    <v-navbar @open="show = true"></v-navbar>
    <!-- Sidebar -->
    <v-sidebar @close="show = false" :show="show" />
    <!-- Vista -->
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
