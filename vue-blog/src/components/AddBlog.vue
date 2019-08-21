<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy.trim="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p style="white-space:pre">{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blog: {
          titile: '',
          content: ''
        }
      }
    },
  }
</script>

<style>
  #add-blog *{
    box-sizing: border-box
  }
  #add-blog {
    margin: 20px auto;
    max-width: 600px
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display:block;
    width: 100%;
    padding: 8px;
  }
  h3 {
    margin-top: 10px;
  }
  #preview{
    padding: 10px 20px;
    margin: 30px 0;
    border: 1px dotted #ccc;
  }
</style>