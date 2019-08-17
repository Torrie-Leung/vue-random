<template>
  <div id="app">
    <h2>Counter</h2>
    <h2>{{count}}</h2>
    <IncrementBtn/>
    <DecrementBtn/>
  </div>
</template>



<script>
import IncrementBtn from './IncrementBtn'
import DecrementBtn from './DecrementBtn'


  export default {
    name: 'App',
    components: {
      IncrementBtn,
      DecrementBtn
    },
    data() {
      return {
        count: 0,
        text:'',
        entry: 3
      }
    },
    created(){
      
    }
  }
</script>

<style>
#app {
  margin: 5px;
  text-align: center;
  font-size: 2em;
}
#app button{
  margin: 5px;
  font-size:17px;
}
</style>