<template>
  <div id="product-list-two">
    <h2>List 2</h2>
    <ul>
      <li v-for="(product,index) in products" :key="index">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <a-button type="dashed" @click="toggle()">something new...</a-button>
    <span v-if="sharedState.newArrivals" v-text="sharedState.text"></span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        privateState: {},
        sharedState:this.$store.state
      }
    },
    computed: {
      products() {
        return this.sharedState.products
      }
    },
    methods: {
      ...mapActions([
        'toggle'
      ])
    },
  }
</script>

<style scoped>
  #product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #product-list-two ul{
    padding: 0;
    list-style-type: none;
  }
  #product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
  }
  .price{
    font-weight: bold;
    color: #860CE8;
    display: block;
  }
</style>