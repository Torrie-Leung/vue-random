import Characters from './components/Characters.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'

export default[
  {
    name:'Characters',
    path: '/',
    component:Characters
  },
  {
    name:'About',
    path: '/about',
    component:About
  },
  {
    name:'Add',
    path: '/add',
    component:Add
  }
]