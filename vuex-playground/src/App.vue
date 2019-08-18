<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
export default {
  name: 'app',
  components: {
    ProductListOne,
    ProductListTwo,
  },
  data() {
    return {
      products: [
        {name:'Mario Cart',price: 2300},
        {name:'Luigi Mansion',price: 230000},
        {name:'Yoshi Sashimi',price: 230},
        {name:'Toad Mushroom',price: 23}
      ]
    }
  },
}
</script>

<style>

</style>
