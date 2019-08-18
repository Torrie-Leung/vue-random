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
      
    }
  },
}
</script>

<style>

</style>
