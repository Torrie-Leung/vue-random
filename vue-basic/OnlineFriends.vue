<template>
  <div id="online-friends">
    <h1>online Friends</h1>
    <div v-for="(friend,index) in friends" :key="index">
      <span v-if="friend.online">{{friend.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'OnlineFriends',
    props: {
      friends: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style>

</style>