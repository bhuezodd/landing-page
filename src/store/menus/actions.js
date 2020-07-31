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
  }
}