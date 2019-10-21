<template>
  <div id="app">
    <app-header></app-header>
    <!-- <router-link to="/add">go to addBlog</router-link> -->
    <transition name="slide-fade" >
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import ListBlogs from './components/ListBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'list-blogs':ListBlogs,
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'app-header':Header
  }
}
</script>

<style>
body{
  margin: 0
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  /* ease-in-out */
  transition: all .4s cubic-bezier(.42, 0, .58, 1);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
