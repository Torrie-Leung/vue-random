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
    
    <a-switch v-model="checked" :disabled="disabled" checkedChildren="Widen" unCheckedChildren="Narrow"  @change="onChange($event)"/>
  </nav>
</template>

<script>
import { bus } from '../main'
  export default {
    data() {
      return {
        disabled: false,
        checked: false
      }
    },
    methods: {
      onChange(){
        //console.log(event.target.innerText)
        bus.$emit('toggleWidth',{
          type:event.target.innerText,
          wide: 'wide',
          narrow: 'narrow'
        })
      }
    },
    watch: {
      $route(to,from){
        //console.log('to:',to.name,'from:',from.name)
        if(to.name !== 'ShowBlogs'|| to.name == 'undefined'){
          this.disabled = true
          this.checked = false
          
        }else{
          this.disabled = false
          this.checked = false
        }
      }
    },
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

  .ant-switch {
    position: absolute;
    border-radius: 4px;
    right:0;
    top:25%;
  }
</style>