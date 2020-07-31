<template>
  <div class="h-screen p-32 flex">
    <div class="relative w-6/12">
      <!-- Title -->
      <div class="title">
        <div
          class="font-title text-5xl leading-tight animation flex justify-center"
          v-show="getScroll > getHeight"
        >
          <div class="child">Estamos para ti</div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full mt-4 flex">
          <div class="btn border active">
            <v-icon icon="takeaway" color="white" />
            <span class="px-2">Para llevar</span>
          </div>
          <div class="btn border">
            <v-icon icon="delivery" color="black" />
            <span class="px-2">Domicilio</span>
          </div>
        </div>
        <div class="w-full h-16 border flex justify-center items-center">
          <img src="@/assets/img/icons/search.svg" alt />
          <input
            type="text"
            class="w-8/12 h-full font-sans text-xl px-2 focus:outline-none"
            v-model="search"
            placeholder="Buscar nombre o dirección"
          />
        </div>
        <div class="w-full max-h-full px-16">
          <card-location
            :active="select == item.id ? true : false"
            @click="selectLocation"
            v-for="item in items"
            :key="item.id"
            :item="item"
          ></card-location>
        </div>
      </div>
    </div>
    <div class="w-6/12">
      <google-components class="h-full w-full"></google-components>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["text"],
  data() {
    return {
      key: process.env.APIKEY,
      search: "",
      select: 0,
      items: [
        {
          id: 1,
          name: "Sucursal 75 Avenida",
          opening_time: "10:00:00",
          closing_time: "20:00:00",
          address: "Avenida Jerusalen 0006, San Salvador.",
          latitude: "13.710566",
          longitude: "-89.231635",
          type: "takeaway",
        },
        {
          id: 2,
          name: "Sucursal 75 Avenida",
          opening_time: "10:00:00",
          closing_time: "20:00:00",
          address: "Avenida Jerusalen 0006, San Salvador.",
          latitude: "13.710566",
          longitude: "-89.231635",
          type: "takeaway",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
  },
  methods: {
    selectLocation(item) {
      this.select = item.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.change-my-color {
  color: green;
  fill: green;
}
</style>
