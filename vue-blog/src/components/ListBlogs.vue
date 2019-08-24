<template>
  <div v-theme:column="'narrow'" id="list-blogs" >
    <h1>List Blog titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="(blog,index) in filterBlogs" :key="index">
      <h2 v-rainbow>{{blog.title|to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'
  export default {
    data() {
      return {
        blogs:[],
        search:''
      }
    },
    
    methods: {
      
    },
    created () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          //console.log(data)
          this.blogs = data.body.slice(0,10)
        })
    },
    computed: {
      
    },
    filters: {
      toUppercase(value){
        return value.toUpperCase()
      }
    },
    directives: {
      rainbow:{
        bind(el,binding,vnode){
          el.style.color = '#'+Math.random().toString(16).slice(2,8)
        }
      }
    },
    mixins: [searchMixin]
  }
</script>

<style >
  #list-blogs{
    max-width: 800px;
    margin: 10px auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>