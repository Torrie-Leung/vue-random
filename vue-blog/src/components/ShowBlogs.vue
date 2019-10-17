<template>
  <div v-theme:column='width' id="show-blogs" >
    <h1>All Blog Articles</h1>
    <!-- <input type="text" v-model="search" placeholder="search blogs"> -->
    
    <a-input placeholder="Search Blogs" v-model="search">
      <a-icon slot="prefix" type="search" />
    </a-input>
    <div class="single-blog" v-for="(blog,index) in filterBlogs" :key="index">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title|to-uppercase}}</h2>
      </router-link>
      
      <article>{{blog.body|snippet}}</article>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'
  import { bus } from '../main'
  export default {
    data() {
      return {
        blogs:[],
        search:'',
        width: 'narrow'
      }
    },
    
    methods: {
      
    },
    created () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          //console.log(data.data)
          this.blogs = data.data.slice(0,10)
        }),
      bus.$on('toggleWidth',(data) => {
        
        if(this.width == 'narrow'&& data.type == 'Narrow'){
          this.width = data.wide
        }else if(this.width !== 'narrow' && data.type == 'Widen'){
          this.width = data.narrow
        }
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
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

  a{
    text-decoration: none;
  }

  input[type="text"]{
    width: 100%;
  }
</style>