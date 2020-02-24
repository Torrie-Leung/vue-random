import Vue from 'vue'
import App from './App.vue'
import jsonp from 'vue-jsonp'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(jsonp)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
