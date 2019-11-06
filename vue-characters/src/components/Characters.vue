<template>
  <div class="characters container">
    <Alert v-if="alert" :message="alert"/>
    <h1 class="page-header">Wonderland System</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(character,index) in characters" :key="index">
          <td>{{character.name}}</td>
          <td>{{character.phone}}</td>
          <td>{{character.email}}</td>
          <td>
            <router-link class="btn btn-secondary btn-sm" :to="'/character/' + character.id">detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'character',
  components:{
    Alert
  },
  data(){
    return{
      characters: [],
      alert: ''
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCharacters()
  },
  updated(){
     //this.fetchCharacters()
  },
  methods: {
    fetchCharacters(){
      this.$http.get("http://localhost:3000/characters")
          .then((res) => {
            //console.log(res.data)
            this.characters = res.data
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-sm {
  padding: 0;
}
</style>
