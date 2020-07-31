<template>
  <div class="text-center" :class="item.width">
    <div class="w-full flex flex-wrap justify-center">
      <div
        class="animation-text rounded-full bg-yellow w-10 h-10 flex justify-center items-center text-white font-bold"
      >{{ item.id }}</div>
    </div>
    <p class="font-title text-xl animation-text">{{ item.title }}</p>
    <p class="animation-text">{{ item.description }}</p>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>