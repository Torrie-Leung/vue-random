<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in the form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label>Your Msg</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper.vue'
  export default {
    components: {
      'form-helper':formHelper,
    },
    methods: {
      handleSubmit() {
        alert('thanks for submitting form one & contact us.')
      }
    },
  }
</script>

<style scoped>
  div {
    margin: 0;
    font-family: sans-serif;
  }
</style>