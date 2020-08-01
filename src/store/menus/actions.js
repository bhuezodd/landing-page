import MenuServices from '@/services/Menu'

export default {
  async fetchMenu({ commit }) {
    try {
      let { data } = await MenuServices.fetchMenuAPI();
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
  },
  async fetchMenuForCategory({ commit }, cate) {
    try {
      let { data } = await MenuServices.fetchMenuForCategoryAPI(cate);
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
  },
  async fetchMenuForQuery({ commit }, cate) {
    try {
      let { data } = await MenuServices.fetchMenuForQueryAPI(cate);
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
  },
  async fetchCategory({ commit }) {
    try {
      let { data } = await MenuServices.fetchCategoryAPI();
      commit("FETCH_CATEGORIES", data);
      return data
    } catch (error) {
      console.log(error);
    }
  },
  async paginationMenu({ commit }, num) {
    try {
      let { data } = await MenuServices.paginationMenuAPI(num);
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
  },
}