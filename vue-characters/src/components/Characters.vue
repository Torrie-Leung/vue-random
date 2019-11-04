<template>
  <div class="characters container">
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
        <tr >
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'characters',
  data(){
    return{
      characters: []
    }
  },
  created(){
    this.fetchCharacters()
  },
  methods: {
    fetchCharacters(){
      this.$http.get("http://localhost:3000/characters")
          .then((res) => {
            console.log(res)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
