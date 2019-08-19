<template>
  <a-button class="btn" type="primary" @click="reducePrice(3)">grab a $3 coupon</a-button>
  
</template>

<script>

  import {mapActions} from 'vuex';
  export default {
    
    methods: {
      ...mapActions([
        'reducePrice'
      ])
    },
  }
</script>

<style scoped>
  .btn{
    display: block;
    margin: 0 auto;
  }
</style>