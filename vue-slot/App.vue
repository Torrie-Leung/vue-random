<template>
  <div>
    <Helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
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
    methods: {
      handleSubmit() {
        
      }
    },
  }
</script>

<style>

</style>