<template>
  <div class="hello">
    <div ref="mapBox" style="height:800px;width:100%"></div>
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
    name: '确诊人数',
    type: 'map',
    map: 'china',
    label: {
      show: true,
      color:'#333'
    },
    zoom:1.2,
    roam:true,
    data:'',
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
  }],
  tooltip: {
    show:true
  }
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.fetchData()
    this.myMap = echarts.init(this.$refs.mapBox);
    this.myMap.setOption(option)
    let _this = this;
    window.onresize = function(){
      _this.myMap.resize()
    }
  },
  methods: {
    fetchData() {
      this.axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=83c5f5148cb4cfc38eba35d34586c50f').then((response) => {
        
        let list = response.data.newslist.map(item =>(
          {name:item.provinceShortName,value:item.confirmedCount}))
        option.series[0].data = list
        console.log(list)
        this.myMap.setOption(option)
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello div{
  margin: 0 auto;
}
</style>
