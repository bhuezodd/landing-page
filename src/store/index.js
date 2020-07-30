import Vue from 'vue'
import Vuex from "vuex";
import categoriesModule from "./categories";
import contactModule from "./contact";
import locationsModule from "./locations";
import menuModule from "./menu";
import generalModule from "./general";

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const createStore = new Vuex.Store({
  modules: {
    categories: categoriesModule,
    contact: contactModule,
    locations: locationsModule,
    menu: menuModule,
    general: generalModule
  },
  strict: debug,
});

export default createStore;