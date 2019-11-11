import Characters from './components/Characters.vue'
import CharacterDetails from './components/CharacterDetails.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'

export default[
  {
    name:'Characters',
    path: '/character',
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
  },
  {
    name:'Edit',
    path: '/edit/:id',
    component:Edit
  },
  {
    name:'CharacterDetails',
    path: '/character/:id',
    component:CharacterDetails
  },
]