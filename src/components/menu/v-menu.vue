<template>
  <div class="xl:px-32 md:px-16 px-2 my-16">
    <div class="w-full flex flex-wrap">
      <div class="xl:w-5/12 md:w-full w-10/12 mb-8">
        <div class="h-12 border flex items-center border rounded pl-2">
          <img src="@/assets/img/icons/search.svg" alt />
          <input
            type="text"
            class="w-full h-full font-sans text-xl px-2 focus:outline-none"
            @input="searchMenu"
            placeholder="Buscar nombre o dirección"
          />
        </div>
      </div>
      <div class="w-2/12 flex items-start pl-2 font-title md:hidden">
        <img src="@/assets/img/icons/filter.svg" class="w-10" @click="$emit('open')" />
      </div>
      <div class="xl:w-7/12 w-full flex items-center px-4 font-title md:flex hidden">
        <span class="link-hover mx-4" @click="selectCategory(null)">Todas</span>
        <span
          class="link-hover mx-4"
          @click="selectCategory(item.id)"
          v-for="item in categories.data"
          :key="item.id"
        >{{item.name}}</span>
      </div>
    </div>
    <div v-if="isLoading == false">
      <div v-if="menu.data.length > 0">
        <div class="w-full flex flex-wrap mt-8">
          <div class="xl:w-3/12 md:w-1/2 w-full p-4" v-for="item in menu.data" :key="item.id">
            <v-card-menu :item="item"></v-card-menu>
          </div>
        </div>
        <div class="flex flex-wrap justify-center font-bold font-sans">
          <div class="md:w-9/12 w-full flex md:justify-end justify-center">
            <a
              href="#products"
              class="btn-pag focus:outline-none border mx-2"
              :class="index + 1 == menu.meta.current_page ? 'active' : ''"
              v-for="(item,index) in menu.meta.last_page"
              :key="item.from"
              @click="nextPage(index+1)"
            >{{index +1}}</a>
          </div>
          <div class="md:w-3/12 w-full flex md:justify-start justify-center">
            <a
              href="#products"
              class="md:px-2 p-2 md:mt-0 mt-3 flex justify-center border items-center rounded focus:outline-none border mx-2 bg-yellow opacity-50 text-black hover:opacity-100"
              v-if="menu.links.next != null"
              @click="nextPage(menu.meta.current_page +1)"
            >Siguiente</a>
          </div>
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
      <v-loading />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters("menus", ["menu"]),
  data() {
    return {
      isLoading: true,
      categories: [],
      search: "",
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    ...mapActions("menus", [
      "fetchMenu",
      "fetchCategory",
      "fetchMenuForCategory",
      "fetchMenuForQuery",
      "paginationMenu",
    ]),
    async getMenu() {
      this.isLoading = true;
      await this.fetchMenu();
      this.categories = await this.fetchCategory();
      this.isLoading = false;
    },
    async selectCategory(id) {
      if (id != null) {
        await this.fetchMenuForCategory(id);
      } else {
        await this.fetchMenu();
      }
    },
    async searchMenu({ target }) {
      let text = target.value;
      if (text.trim() != "") {
        await this.fetchMenuForQuery(text);
      } else {
        await this.fetchMenu();
      }
    },
    async nextPage(num) {
      await this.paginationMenu(num);
    },
  },
};
</script>