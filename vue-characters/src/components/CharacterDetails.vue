<template>
  <div class="details container">
    CharacterDetails
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

</style>
