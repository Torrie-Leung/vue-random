<template>
  <div class="details container">
    <h1 class="page-header">
      {{character.name}}
      
    </h1>

    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"> {{character.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"> {{character.email}}</span></li>
    </ul>

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
    console.log(this.$route.params.id)
    this.fetchCharacter(this.$route.params.id)
  },
  methods: {
    fetchCharacter(id){
      this.$http.get("http://localhost:3000/characters/"+id)
          .then((res) => {
            console.log(res.data)
            this.character = res.data
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
