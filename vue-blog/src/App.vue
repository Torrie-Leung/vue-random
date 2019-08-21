<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>
import ListBlogs from './components/ListBlogs.vue'
import AddBlog from './components/AddBlog.vue'

export default {
  name: 'app',
  components: {
    'list-blogs':ListBlogs,
    'add-blog': AddBlog
  }
}
</script>

<style>
body{
  margin: 0
}
</style>
