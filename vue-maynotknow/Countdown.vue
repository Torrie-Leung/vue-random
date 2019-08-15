<template>
  <div id="app5">
    <button @click="startCount">start to countdown</button>
    <span data-count="60" v-count-down v-if="show" style="font-size:16px;">60</span>
  </div>
</template>

<script>
  export default {
    name:'Countdown',
    data() {
      return {
        show: false,
        timer:null
      }
    },
    methods: {
      startCount:function() {
        this.show = true
      }
    },
    directives: {
      'count-down': {
        bind: function (el, binding, vnode) {
          //directive中this无指向，可通过vnode.context指向当前vm实例
          //context:Component | void --rendered in this component's scope
          //console.log(vnode.context.timer)
          let self = vnode.context
          let count = parseInt(el.getAttribute('data-count'))
          self.timer = setInterval(function () {
            if (count <= 0) {
              clearInterval(self.timer)
              self.timer = null
            } else {
              count--
              el.innerHTML = count
              el.setAttribute('data-count', count)
            }
          }, 1000)
        }
      }
      }
  }
</script>

<style>

</style>