<template>
  <div class="wrapper">
    <div class="ribbon">
      <div class="info">
        Name: {{name}},
        gender: {{sex}},
        age range: {{age}},
        <br/>
        love {{favor.join(',')}},
        Membership: {{member ? 'yes':'no'}}
      </div>
    </div>
    <div class="form-area"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Bender',
        age: "30-40",
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
</style>