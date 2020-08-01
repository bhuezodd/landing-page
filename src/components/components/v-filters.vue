<template>
  <div
    class="w-full mr-5 px-5 py-5 lg:hidden block px-5 fixed z-50 rounded-b-lg text-white bg-black"
    v-show="show"
  >
    <div class="w-full flex justify-between">
      <a
        class="w-auto xl:mr-32 lg:mr-10 xl:text-3xl lg:text-2xl mr-5 text-2xl font-title text-yellow"
        href="#top"
      >Foodies</a>
      <div class="lg:hidden block">
        <v-icon-menu @click="close(null)" icon="x" color="white" />
      </div>
    </div>
    <div class="py-4">
      <a class="text-2xl" @click="close('todos')">Todas</a>
    </div>
    <div class="py-4" v-for="item in categories.data" :key="item.id">
      <a @click="close(item.id)" class="text-2xl" :class="show ? '' : 'hidden'">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("menus", ["categories"]),
  },
  props: ["show"],
  methods: {
    ...mapActions("menus", ["fetchMenuForCategory", "fetchMenu"]),
    async close(id) {
      if (id != null) {
        if (id == "todos") {
          await this.fetchMenu();
        } else {
          await this.fetchMenuForCategory(id);
        }
      }
      this.$emit("close");
    },
  },
};
</script>