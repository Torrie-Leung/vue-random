import Vue from 'vue';
import Vuex from 'vuex';


// tell vue to use plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  strict:true,
  state: {
    products: [
      {name:'Mario Cart',price: 2300},
      {name:'Luigi Mansion',price: 230000},
      {name:'Yoshi Sashimi',price: 230},
      {name:'Toad Mushroom',price: 23}
    ]
  },
  getters: {
    saleProducts: state => {
      const saleProducts = state.products.map(product => {
        return {
          name:'**'+product.name+'**',
          price: (product.price*0.8).toFixed(2)
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: state => {
      state.products.forEach( product => {
        product.price -= 1;
      });
    }
    
  }
})