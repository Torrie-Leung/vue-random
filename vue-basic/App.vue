<template>
  <div id="app">
    <h1>{{title}}</h1>
    <AllF :friends="friends"/>
    <OnlineFriends :friends="friends"/>
    <h3>Click to see each book's index</h3>
    <Article :article="articles" @onEmitIndex="onEmitIndex"/>
    <p>{{currentIndex}}</p>
  </div>
</template>

<script>
import AllF from './AllF'
import OnlineFriends from './OnlineFriends'
import Article from './Article'
  export default {
    name:'app',
    components: {
      AllF,
      OnlineFriends,
      Article
    },
    data() {
      return {
        title: 'hey my friends,woo :)',
        friends: [
          {name: 'Mario', online: false},
          {name: 'Luigi', online: true},
          {name: 'Toad', online: false},
          {name: 'Yoshi', online: true},
        ],
        currentIndex: -1,
        articles:['Dealing with China','A brief History of Tomorrow','1984']
      }
    },
    methods: {
      onEmitIndex(idx) {
        this.currentIndex = idx
      }
    },
  }
</script>

<style>

</style>