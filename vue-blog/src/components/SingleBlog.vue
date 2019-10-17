<template>
  <div id="single-blog">
    <h1 ref="test">{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <div class="rating-area">
      <a-card size="small"  title="Rate this article" :bordered="false">
        <a-rate :defaultValue="2.5" allowHalf />
      </a-card>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog:{}
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts'+ '/'+this.id)
        .then( (data) => {
          //console.log(data)
          this.blog = data.data
        })
    },
  }
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
  }

  .rating-area{
    width: 200px;
    background-color: #ececec; 
    padding: 5px;
    margin-top: 20px;
  }
</style>