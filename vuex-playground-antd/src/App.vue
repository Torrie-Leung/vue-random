<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <reduce-btn></reduce-btn>
    
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
import ReduceBtn from './components/ReduceBtn'
export default {
  name: 'app',
  components: {
    ProductListOne,
    ProductListTwo,
    ReduceBtn
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>
