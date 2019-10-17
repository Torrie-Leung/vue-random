<template>
  <div id="single-blog">
    <h1 ref="test">{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <div class="rating-area">
      <a-card size="small"  title="Rate this article" :bordered="false">
        <a-rate v-model="value" allowHalf :tooltips="desc" @change="grabStar(value)"/>
        <span class="ant-rate-text" >{{desc[value - 1.5] || desc[value - 1]}}</span>
      </a-card>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog:{},
        value: 2.5,
        desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
        comment: ''
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts'+ '/'+this.id)
        .then( (data) => {
          //console.log(data)
          this.blog = data.data
        })
    },
    methods: {
      grabStar(value){
        console.log(value)
        console.log(Number.isInteger(value))
      }
    },
  }
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
  }

  .rating-area{
    width: 300px;
    background-color: #ececec; 
    padding: 5px;
    margin-top: 20px;
  }
</style>