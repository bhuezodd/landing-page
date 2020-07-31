<template>
  <div class="px-32 my-16">
    <div class="w-full flex">
      <div class="w-5/12">
        <div class="h-12 border flex items-center border rounded pl-2">
          <img src="@/assets/img/icons/search.svg" alt />
          <input
            type="text"
            class="w-full h-full font-sans text-xl px-2 focus:outline-none"
            v-model="search"
            placeholder="Buscar nombre o dirección"
          />
        </div>
      </div>
      <div class="w-full flex items-center px-4 font-title">
        <span class="link-hover mx-4">Todas</span>
        <span class="link-hover mx-4" v-for="item in categories.data" :key="item.id">{{item.name}}</span>
      </div>
    </div>
    <div v-if="isLoading == false">
      <div v-if="menu.data.length > 0">
        <div class="w-full flex flex-wrap mt-8">
          <div class="w-3/12 p-4" v-for="item in menu.data" :key="item.id">
            <card-menu :item="item"></card-menu>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="btn-pag focus:outline-none border mx-2"
            :class="index + 1 == menu.meta.current_page ? 'active' : ''"
            v-for="(item,index) in menu.meta.last_page"
            :key="item.from"
          >{{index +1}}</button>
        </div>
      </div>
      <div v-else class="flex flex-wrap justify-center p-32">
        <div class="w-full flex justify-center">
          <img src="@/assets/img/svgs/error-search.svg" alt />
        </div>
        <div class="w-5/12 text-center">
          <span class="font-title text-sub-text">¡Platillo no encontrado!</span>
          <p
            class="font-sans"
          >Te invitamos a que verifiques si el nombre esta bien escrito o prueba buscando un nuevo platillo.</p>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-wrap justify-center p-32">
      <loading />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isLoading: true,
      menu: [],
      categories: [],
      search: "",
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    ...mapActions("menus", ["fetchMenu", "fetchCategory"]),
    async getMenu() {
      this.isLoading = true;
      this.menu = await this.fetchMenu();
      this.categories = await this.fetchCategory();
      this.isLoading = false;
    },
  },
};
</script>