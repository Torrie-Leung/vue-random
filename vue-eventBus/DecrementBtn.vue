<template>
  <button class="dec" @click.prevent="handleDec">Decrement Button</button>
</template>

<script>
  export default {
    name:'DecrementBtn',
    methods: {
      handleDec() {
        eventBus.$emit('count-decremented')
      }
    },
  }
</script>

<style>
.dec{
  background-color:#f70000;
	border:1px solid #18ab29;
	
}
</style>