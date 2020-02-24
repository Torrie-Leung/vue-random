<template>
  <div class="hello">
    <div ref="mapBox" style="height:800px;width:900px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'

const option = {
  title: {
    text: 'COVID-19',
    link:'https://www.who.int/zh/health-topics/coronavirus/coronavirus'
  },
  series: [{
    type: 'map',
    map: 'china',
    label: {
      show: true,
      color:'#333'
    },
    zoom:1.2,
    itemStyle: {
      areaColor: 'lightgreen'
    },
    emphasis: {
      label: {
        fontSize:14,
        color:'#fff'
      },
      itemStyle: {
        areaColor: 'orange'
      },
    }
  }],
  visualMap: [{
    type: 'piecewise',
    show:true,
    splitNumber:5,
    pieces: [
      {min:10000},
      {min:1000,max:9999},
      {min:100,max:999},
      {min:10,max:99},
      {max:9},
      
    ],
    // orient:'horizontal'
  }]
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    let myMap = echarts.init(this.$refs.mapBox);
    myMap.setOption(option)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello div{
  margin: 0 auto;
}
</style>
