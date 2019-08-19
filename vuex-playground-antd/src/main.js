import Vue from 'vue'

import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";

Vue.component(Button.name, Button);

import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')




