export default {
  ["isLoading"](state, status) {
    state.laoding = status
  },
  ["FETCH_MENU"](state, data) {
    state.menu = data
  },
  ["FETCH_CATEGORIES"](state, data) {
    state.categories = data
  }
}