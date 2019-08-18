import Vue from 'vue';
import Vuex from 'vuex';


// tell vue to use plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name:'Mario Cart',price: 2300},
      {name:'Luigi Mansion',price: 230000},
      {name:'Yoshi Sashimi',price: 230},
      {name:'Toad Mushroom',price: 23}
    ]
  }
})