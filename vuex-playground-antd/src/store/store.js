import Vue from 'vue';
import Vuex from 'vuex';


// tell vue to use vuex plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  strict:true,
  state: {
    products: [
      {name:'Mario Cart',price: 2300},
      {name:'Luigi Mansion',price: 230000},
      {name:'Yoshi Sashimi',price: 230},
      {name:'Toad Mushroom',price: 23}
    ],
    newArrivals:false,
    text: 'Coming soon...'
  },
  getters: {
    saleProducts: state => {
      const saleProducts = state.products.map(product => {
        return {
          name:'**'+product.name+'**',
          price: (product.price*0.7).toFixed(2)
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state,payload) => {
      state.products.forEach( product => {
        product.price -= payload;
      });
    },
    toggle:(state) => {
      state.newArrivals = !state.newArrivals
    }
    
  },
  actions: {
    reducePrice: (context,payload) => {
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },1000)
    },
    toggle: (context) => {
      context.commit('toggle')
    }
  }
})