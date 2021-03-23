import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import store from './library/store/vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './library/router'
import { sync } from 'vuex-router-sync'
import 'element-ui/lib/theme-chalk/index.css'

// Logging
Vue.config.productionTip = false

// Syncs routes and vuex
sync(store, router)


Vue.use(ElementUI);
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
