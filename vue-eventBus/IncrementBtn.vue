<template>
  <button class="inc" @click.prevent="handleInc">Increment Button</button>
</template>

<script>
  export default {
    name:'IncrementBtn',
    methods: {
      handleInc() {
        eventBus.$emit('count-incremented')
      }
    },
  }
</script>

<style scoped>
.inc{
  background-color:#44c767;
	border:1px solid #18ab29;
}
</style>