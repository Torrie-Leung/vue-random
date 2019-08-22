<template>
  <div>
    <div class="eg" v-for="(item,index) in article" :key="index" @click="emitIndex(index)">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      article: {
        type: Array
      },
    },
    methods: {
      emitIndex(index) {
        this.$emit('onEmitIndex',index)
      }
    },
  }
</script>

<style scoped>
  .eg:hover{
    cursor: pointer;
  }
</style>