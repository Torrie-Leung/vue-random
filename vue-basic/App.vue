<template>
  <div id="app">
    <h1>{{title}}</h1>
    <AllF :friends="friends"/>
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import AllF from './AllF'
import OnlineFriends from './OnlineFriends'
  export default {
    name:'app',
    components: {
      AllF,
      OnlineFriends
    },
    data() {
      return {
        title: 'hey my friends,woo :)',
        friends: [
          {name: 'Mario', online: false},
          {name: 'Luigi', online: true},
          {name: 'Toad', online: false},
          {name: 'Yoshi', online: true},
        ]
      }
    },
  }
</script>

<style>

</style>