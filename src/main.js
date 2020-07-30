import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './services'
import router from './router'
import store from './store'
import './assets/sass/style.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
