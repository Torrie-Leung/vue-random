<template>
  <div id="app2">
    <span v-for="(item,idx) in name" :key="idx" v-bind:style="{animationDelay: `${0.5 + idx * 0.3}s`}">{{item}}</span>
  </div>
</template>

<script>
export default {
  name:'Vfor',
  data(){
    return {
      name: 'Adventure Time'
    }
  }
}
</script>

<style>
  #app2 span {
    /* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
    animation: mymove 1s ease-in-out 3 both;
    
  }
  @keyframes mymove {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>