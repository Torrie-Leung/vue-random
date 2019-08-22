import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//Custom directives,pay attention to the importing order
Vue.directive('rainbow', {
  inserted:(el,binding,vnode) =>{
    el.style.color = '#'+Math.random().toString().slice(2,8);
  }
})
