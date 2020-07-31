import Vue from 'vue'
import Vuex from "vuex";
import contactModule from "./contact";
import locationsModule from "./locations";
import menuModule from "./menus";
import generalModule from "./general";

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const createStore = new Vuex.Store({
  modules: {
    contact: contactModule,
    locations: locationsModule,
    menus: menuModule,
    general: generalModule
  },
  strict: debug,
});

export default createStore;