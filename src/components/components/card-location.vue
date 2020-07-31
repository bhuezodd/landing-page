<template>
  <div
    class="w-full p-4 border-cicle my-4 rounded-md"
    :class="active ? 'bg-beige' : 'border border-black'"
    @click="$emit('click',item)"
  >
    <section class="font-syne text-3xl font-bold">{{ item.name }}</section>
    <section class="font-sans text-xl">Abierto de {{ open }}- {{ close }}</section>
    <section class="font-sans text-xl">{{ item.address }}</section>
  </div>
</template>
<script>
export default {
  props: ["item", "active"],
  computed: {
    open() {
      let time = this.item.opening_time.split(":");
      let hours =
        parseInt(time[0]) > 12 ? parseInt(time[0]) - 12 : parseInt(time[0]);
      let minutes = time[1];
      let mid =
        parseInt(time[0]) > 12
          ? parseInt(time[0]) == 12
            ? "m.d"
            : "p.m"
          : "a.m";
      return `${hours}:${minutes} ${mid}`;
    },
    close() {
      let time = this.item.closing_time.split(":");
      let hours =
        parseInt(time[0]) > 12 ? parseInt(time[0]) - 12 : parseInt(time[0]);
      let minutes = time[1];
      let mid =
        parseInt(time[0]) > 12
          ? parseInt(time[0]) == 12
            ? "m.d"
            : "p.m"
          : "a.m";
      return `${hours}:${minutes} ${mid}`;
    },
  },
};
</script>