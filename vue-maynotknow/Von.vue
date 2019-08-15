<template>
  <div id="app3">
    <button @click.left="handleClick($event)">confirm</button>
    <button @click.right="handleClick($event)">cancel</button>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Von',
  data() {
    return {
      btnTxt: ''
    }
  },
  computed: {
    msg(){
      return this.btnTxt ? `you clicked 【${this.btnTxt}】 button` : `you haven't clicked any button yet`
    }
  },
  methods: {
    handleClick(e){
      console.log(e)
      this.btnTxt = e.target.innerText
    }
  },
}
</script>

<style>

</style>