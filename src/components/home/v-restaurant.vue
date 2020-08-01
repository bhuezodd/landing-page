<template>
  <div class="md:px-16 md:pt-16 flex flex-wrap">
    <div class="xl:w-6/12 w-full">
      <!-- Title -->
      <div class="title">
        <div
          class="font-title text-5xl leading-tight flex justify-center"
          :class="getScroll > getHeight /2 ? 'animation' : 'not-animation'"
        >
          <div class="child">Estamos para ti</div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full mt-4 flex">
          <div
            class="btn md:text-2xl text-md border md:p-4 py-2"
            :class="state != 'delivery' ? 'active' : ''"
            @click="getLocation('takeaway')"
          >
            <v-icon icon="takeaway" :color="state != 'delivery' ? 'white' : 'black'" />
            <span class="px-2">Para llevar</span>
          </div>
          <div
            class="btn md:text-2xl text-md border md:p-4 py-2"
            :class="state == 'delivery' ? 'active' : ''"
            @click="getLocation('delivery')"
          >
            <v-icon icon="delivery" :color="state == 'delivery' ? 'white' : 'black'" />
            <span class="px-2">Domicilio</span>
          </div>
        </div>
        <div class="w-full h-16 border flex justify-center items-center">
          <img src="@/assets/img/icons/search.svg" alt />
          <input
            type="text"
            class="w-8/12 h-full font-sans text-xl px-2 focus:outline-none"
            @input="searchData"
            placeholder="Buscar nombre o dirección"
          />
        </div>
        <div class="w-full max-h-full px-16">
          <v-card-location
            :active="select == item.id ? true : false"
            @click="selectLocation"
            v-for="item in getLocations"
            :key="item.id"
            :item="item"
          ></v-card-location>
        </div>
      </div>
    </div>
    <div class="xl:w-6/12 xl:h-screen h-s/5 w-full md:block hidden" v-if="!isLoading">
      <v-google-components class="h-full w-full"></v-google-components>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["text"],
  data() {
    return {
      isLoading: false,
      search: "",
      select: 0,
      state: true,
    };
  },
  mounted() {
    this.getLocation("takeaway");
  },
  computed: {
    ...mapGetters("general", ["getScroll", "getHeight"]),
    ...mapGetters("locations", ["getLocations"]),
  },
  methods: {
    ...mapActions("locations", [
      "setLocation",
      "fetchLocation",
      "fetchLocationQuery",
    ]),
    async selectLocation(item) {
      this.isLoading = true;
      this.select = item.id;
      await this.setLocation({
        lat: parseFloat(item.latitude),
        lng: parseFloat(item.longitude),
      });
      this.isLoading = false;
    },
    async getLocation(type) {
      this.state = type;
      await this.fetchLocation(type);
    },
    async searchData({ target }) {
      await this.fetchLocationQuery({
        type: this.state,
        query: target.value,
      });
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
