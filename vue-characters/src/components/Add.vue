<template>
  <div class="add container">
    <Alert 
      v-if="alert"
      :message="alert"/>
    <h1 class="page-header">Add Characters</h1>
    <form @submit.prevent="addCharacter">
      <div class="well">
        <h4>Character Info</h4>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="name" v-model="character.name">
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" placeholder="phone" v-model="character.phone">
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="email" v-model="character.email">
        </div>

        <div class="form-group">
          <label>Level</label>
          <input type="text" class="form-control" placeholder="level" v-model="character.level">
        </div>

        <div class="form-group">
          <label>Skill</label>
          <input type="text" class="form-control" placeholder="skill" v-model="character.skill">
        </div>

        <div class="form-group">
          <label>Profile</label>
          <textarea class="form-control" rows="10" v-model="character.profile"></textarea>
        </div>
        <button type="submit" class="btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  components:{
    Alert
  },
  data(){
    return{
      character: {},
      alert:''
    }
  },
  methods: {
    addCharacter(e){
      if(!this.character.name ||!this.character.email || !this.character.phone || !this.character.level){
        // console.log('please fill up related info')
        this.alert = "please fill up related info"
      }else{
        let newCharacter = {
          name : this.character.name,
          email : this.character.email,
          level :this.character.level,
          skill : this.character.skill,
          phone : this.character.phone,
          profile : this.character.profile
          
        }
        this.$http.post("http://localhost:3000/characters",newCharacter)
            .then((res) => {
              // 
              this.$router.push({path:"/character",query: {alert:'character info added.'}})
            })
      }
      e.preventDefault();
      //console.log('ha')

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
