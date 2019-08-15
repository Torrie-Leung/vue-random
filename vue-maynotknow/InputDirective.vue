<template>
  <div id="#app4">
    <input type="text" v-focus>
    <div id="hook-eg" v-demo:foo.a.b="msg"></div>

    <div id="base-eg">
      <p>Scroll down the page</p>
      <p v-pin="400">Stick me 400px from the top of the page</p>
      <p v-pinn:[custom]="300">I am pinned onto the page at 300px to the left.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputDirective',
  data (){
    return {
      msg:'hey',
      direction: 'left',
      custom:{direction:'left',color:'khaki'}
      
    }
  },
  directives:{
    focus: {
      //called when the bound element has been inserted into its parent node
      inserted: function(el){
        el.focus()
      }
    },
    demo: {
      //called only once,do one time setup work
      bind: function(el,binding,vnode){
        const s = JSON.stringify
        //console.log(el,binding,vnode)
        el.innerHTML = 
        'name:'+s(binding.name)+'<br>'+
        'value: ' + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    },
    pin:{
      bind: function(el,binding,vnode){
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
      }
    },
    pinn:{
      bind: function(el,binding,vnode){
        el.style.position = 'fixed'
        //console.log(binding.arg.color)
        const s = (binding.arg.direction == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
        //console.log(el.style)
        el.style.color = binding.arg.color
      }
    }
  }
}
</script>