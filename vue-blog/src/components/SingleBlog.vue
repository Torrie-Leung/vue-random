<template>
  <div id="single-blog">
    <h1 ref="test">{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <a-divider type="horizontal" />
    <div class="rating-area" v-if="!submitted" v-show="showRatingCard">
      <a-card size="small"  title="Rate this article" :bordered="false">
        <a-alert
          message="please rate first."
          banner
          closable
          v-if="alert"
        />
        <a-rate v-model="value" :allowClear="false" allowHalf :tooltips="desc" @change="grabStar(value)"/>
        <span class="ant-rate-text" >{{desc[value - 1.5] || desc[value - 1]}}</span>
        <a-icon type="check-circle" :theme="theme"   class="rate" @click.prevent="rated"/>
      </a-card>
    </div>
    <div v-if="submitted">
      <p><a-icon type="smile" theme="twoTone" />Thanks for your rating!</p>
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
        theme: null,
        submitted: false,
        alert:false,
        showRatingCard: false,
        star:''
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts'+ '/'+this.id)
        .then( (data) => {
          //console.log(data)
          this.blog = data.data
          this.showRatingCard = true
        })
    },
    methods: {
      grabStar(value){
        this.star = value
        //console.log(value)
        //console.log(Number.isInteger(value))
      },
      rated(){
        if(this.star == ''){
          this.alert = true
          
        }else{
          this.alert = false
          this.theme = 'twoTone'
          console.log('star: ',this.star)
          this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            rate: this.star
          }).then((res) => {
            this.submitted = true
          })
        }
        
      }
    }
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

  .rate{
    margin-left: 30px;
  }

  .rate:hover{
    cursor: pointer;
  }

  .ant-alert{
    font-size: 12px;
    width: 80%;
  }
</style>