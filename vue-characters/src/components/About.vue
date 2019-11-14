<template>
  <div class="about container">
    <h1 class="page-header">About</h1>
    <span class="glyphicon glyphicon-globe" aria-hidden="true"> {{about}}</span>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return{
      about: "Let's do the Odyssey~"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
