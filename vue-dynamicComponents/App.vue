<template>
  <div>
    
    <component :is="component"></component>
  </div>
</template>

<script>
  import formOne from './formOne.vue'
  import formTwo from './formTwo.vue'
  export default {
    components: {
      'form-one':formOne,
      'form-two':formTwo,
    },
    data() {
      return {
        component: 'form-two'
      }
    },
  }
</script>

<style>

</style>