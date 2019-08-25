<template>
  <div id="app">
    <!-- <router-link to="/add">go to addBlog</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ListBlogs from './components/ListBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  name: 'app',
  components: {
    'list-blogs':ListBlogs,
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs
  }
}
</script>

<style>
body{
  margin: 0
}
</style>
