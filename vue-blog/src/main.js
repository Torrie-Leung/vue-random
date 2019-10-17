import Vue from 'vue'
import App from './App.vue'
//import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'


import Switch from "ant-design-vue/lib/switch";
import Rate from "ant-design-vue/lib/rate";
import Input from "ant-design-vue/lib/input";
import Card from "ant-design-vue/lib/card";
import Icon from "ant-design-vue/lib/icon";
import "ant-design-vue/dist/antd.css";
Vue.component(Switch.name, Switch);
Vue.component(Rate.name, Rate);
Vue.component(Input.name, Input);
Vue.component(Card.name, Card);
Vue.component(Icon.name, Icon);

//Vue.use(VueResource)
Vue.use(VueRouter)
Vue.prototype.$http = axios

export const bus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


Vue.config.productionTip = false

//Custom directives
// Vue.directive('rainbow', {
//   inserted:(el,binding,vnode) =>{
//     el.style.color = '#'+Math.random().toString().slice(2,8);
//   }
// })

Vue.directive('theme', {
  bind: (el,binding,vnode) => {
    //console.log(binding)
    if(binding.value == 'wide'){
      el.style.maxWidth = '1200px'
    }else if (binding.value == 'narrow'){
      //console.log(vnode)
      el.style.maxWidth = '560px'
    }

    if(binding.arg == 'column'){
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  },
  update:(el,binding,vnode) =>{
    //console.log(binding)
    if(binding.value == 'wide'){
        el.style.maxWidth = '1200px'
      }else if (binding.value == 'narrow'){
        //console.log(vnode)
        el.style.maxWidth = '560px'
      }
  }
})

//Filters
// Vue.filter('to-uppercase', (value) =>{
//   return value.toUpperCase()
// })

Vue.filter('snippet', (value) => {
  return value.slice(0,123) + '...'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')





