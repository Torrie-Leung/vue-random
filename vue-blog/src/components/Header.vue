<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>Blog</router-link>
      </li>
      <li>
        <router-link to="/add" exact>Add a New Blog</router-link>
      </li>
      <li>
        <router-link to="/list" exact>Blog List</router-link>
      </li>
    </ul>
    <!-- <button @click="changeW">Widen</button> -->
    <a-switch checkedChildren="Widen" unCheckedChildren="Narrow"  @change="onChange"/>
  </nav>
</template>

<script>
import { bus } from '../main'
  export default {
    methods: {
      changeW(){
        
      },
      onChange(){
        bus.$emit('toggleWidth',{
          wide: 'wide',
          narrow: 'narrow'
        })
      }
    }
  }
</script>

<style scoped>
  nav{
    position: relative;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display:inline-block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: #eee;
    color: #444
  }

  button {
    position: absolute;
    border-radius: 4px;
    right:0;
    top:25%;
  }
</style>