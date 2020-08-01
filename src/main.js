import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/sass/style.scss'
import VueCarousel from 'vue-carousel';
import VueSmoothScroll from 'vue2-smooth-scroll'
import '@/components'
import "./vee-validate";

Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.use(VueSmoothScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
