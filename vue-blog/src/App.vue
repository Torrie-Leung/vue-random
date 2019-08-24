<template>
  <div id="app">
    <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
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
