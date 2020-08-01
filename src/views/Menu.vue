<template>
  <div>
    <div id="menu">
      <filters @close="show= false" :show="show" />
    </div>
    <div id="products">
      <m-header></m-header>
    </div>
    <m-menu @open="show = true"></m-menu>
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
