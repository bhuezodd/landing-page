import MenuServices from '@/services/Menu'

export default {
  async fetchMenu({ commit }) {
    try {
      commit("isLoading", true);
      let { data } = await MenuServices.fetchMenuAPI();
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
    finally {

      commit("isLoading", false);
    }
  },
  async fetchMenuForCategory({ commit }, cate) {
    try {
      commit("isLoading", true);
      let { data } = await MenuServices.fetchMenuForCategoryAPI(cate);
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
    finally {

      commit("isLoading", false);
    }
  },
  async fetchMenuForQuery({ commit }, cate) {
    try {
      commit("isLoading", true);
      let { data } = await MenuServices.fetchMenuForQueryAPI(cate);
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
    finally {

      commit("isLoading", false);
    }
  },
  async fetchCategory({ commit }) {
    try {
      commit("isLoading", true);
      let { data } = await MenuServices.fetchCategoryAPI();
      commit("FETCH_CATEGORIES", data);
      return data
    } catch (error) {
      console.log(error);
    }
    finally {

      commit("isLoading", false);
    }
  },
  async paginationMenu({ commit }, num) {
    try {
      commit("isLoading", true);
      let { data } = await MenuServices.paginationMenuAPI(num);
      commit("FETCH_MENU", data);
      return data
    } catch (error) {
      console.log(error);
    }
    finally {

      commit("isLoading", false);
    }
  },
}