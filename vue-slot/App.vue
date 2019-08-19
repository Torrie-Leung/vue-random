<template>
  <div>
    <Helper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I'm the p-text for the slot</p>
    </Helper>
  </div>
</template>

<script>
  import Helper from './Helper'
  export default {
    components: {
      Helper,
    },
    data() {
      return {
        title: 'I\'m a dynamic slot title'
      }
    },
  }
</script>

<style>

</style>