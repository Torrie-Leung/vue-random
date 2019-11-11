<template>
  <div class="details container">
    <router-link to="/" exact class="btn btn-primary">back</router-link>
    <h1 class="page-header">
      {{character.name}}

      <span class="float-right">
        <router-link :to="'/edit/'+character.id" class="btn btn-primary">edit</router-link>
        <button class="btn btn-danger" @click="deleteCharacter(character.id)">delete</button>
      </span>
    </h1>

    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"> {{character.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"> {{character.email}}</span></li>
    </ul>
    <br>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-wrench" aria-hidden="true"> {{character.skill}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-magnet" aria-hidden="true"> {{character.level}}</span></li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'CharacterDetails',
  data(){
    return{
      character: ""
    }
  },
  created(){
    const params = this.$route.params.id
    console.log(typeof Number(params))
    if(typeof Number(params) === 'number'){
      this.fetchCharacter(params)
    }
    
  },
  watch:{
    $route(to,from){
      console.log('t-',to,'f-',from)
      if(this.$route.params.id == 'about'){
        this.$router.push({path:"/about"})
      }else if(this.$route.params.id == 'add'){
        this.$router.push({path:"/add"})
      }else if(this.$route.params.id == 'character'){
        this.$router.push({path:"/character"})
      }
    }
  },
  methods: {
    fetchCharacter(id){
      this.$http.get("http://localhost:3000/characters/"+id)
          .then((res) => {
            console.log(res.data)
            this.character = res.data
          })
    },
    deleteCharacter(id){
      //console.log(id)
      this.$http.delete("http://localhost:3000/characters/"+id)
          .then((res) => {
            this.$router.push({path:'/character'})
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }
</style>
