<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy.trim="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <label>Yoshi</label>
        <input type="checkbox" value="yoshi" v-model="blog.categories">
        <label>Luigi</label>
        <input type="checkbox" value="luigi" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Toad</label>
        <input type="checkbox" value="toad" v-model="blog.categories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        
        <option v-for="(author,index) in authors" :key="index">
          {{author}}
        </option>
      </select>
      

      <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" size="small" >
        <a-icon type="smile" slot="suffixIcon" />
      </a-time-picker>

      <a-button @click.prevent="post" size="small" >Add Blog</a-button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post :)</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p style="white-space:pre">{{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key="index">
          {{category}}
        </li>
      </ul>
      <p>Author:{{blog.author}}</p>
      <p>Launch Time: {{blog.launchTime}}</p>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
  export default {
    data() {
      return {
        blog: {
          titile: '',
          content: '',
          categories:[],
          author:'',
          launchTime:''
        },
        authors:['Evan You','Dan Abramov','Edward Snowden'],
        submitted:false
      }
    },
    methods: {
      
      post() {
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        }).then((data) => {
          // console.log(data)
          this.submitted = true
        })
      },
      moment,
      onChange(time, timeString) {
        //console.log(time, timeString);
        this.blog.launchTime = timeString
      },
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
  #checkboxes input{
    display:inline-block;
    margin-right: 10px;
  }
  #checkboxes label{
    display:inline-block;
  }

  
</style>