<template>
  <div class="wrapper">
    <div class="ribbon">
      <div class="info">
        Name: {{name}},
        Gender: {{sex}},
        Age range: {{age}},
        <br/>
        {{favor.length ?'love':''}} {{favor.join(',')}},
        Membership: {{member ? 'yes':'no'}}
      </div>
    </div>
    <div class="form-area">
      <table>
        <tr>
          <td class="title">Name: </td>
          <td>
            <input v-model="name">
          </td>
        </tr>

        <tr>
          <td class="title">
            Sex:
          </td>
          <td>
            <input type="radio" v-model="sex" value="Female"/>Female
            <input type="radio" v-model="sex" value="Male"/>Male
            <input type="radio" v-model="sex" value="unknow"/>unknown
          </td>
        </tr>

        <tr>
          <td class="title">
            Age:
          </td>
          <td>
            <select v-model="age">
              <option value="under 20">under 20</option>
              <option value="between 20 to 30">between 20 to 30</option>
              <option value="between 30 to 40">between 30 to 40</option>
              <option value="above 40">above 40</option>
            </select>
          </td>
        </tr>

        <tr>
          <td class="title">
            Favor:
          </td>
          <td>
            <input type="checkbox" v-model="favor" value="coding" checked />coding
            <input type="checkbox" v-model="favor" value="traveling" checked />traveling
            <input type="checkbox" v-model="favor" value="surfing" c/>surfing
            <input type="checkbox" v-model="favor" value="jogging" checked />jogging
          </td>
        </tr>

        <tr>
          <td class="title">
            Membership:
          </td>
          <td>
            <input type="checkbox" v-model="member">joined
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Bender',
        age: "between 30 to 40",
        sex: 'unknown',
        favor:['coding','traveling','surfing'],
        member: true
      }
    },
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.wrapper {
  min-width: 1280px;
  height:1200px;
  background-color: #4bbf90;
  position: relative;
}
.ribbon {
  width: 100%;
  height: 10%;
  background-color: #3c5269;
  position: absolute;
  top:25%;
  color: #ffffff;
}
.info {
  margin: 0 auto;
  text-align: center;
  font-size: xx-large;
  line-height: 1.75;
}
.form-area {
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  position: absolute;
  top:37%
}
.form-area table{
  margin: 0 auto;
  text-align: center;
  
}
table td{
  padding: 5px;
}
.title,input {
  font-size: 1.25em;
}
</style>