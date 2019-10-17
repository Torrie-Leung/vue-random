import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import ListBlogs from './components/ListBlogs.vue'

export default[
  {
    name:'ShowBlogs',
    path: '/',
    component:ShowBlogs
  },
  {
    name:'AddBlog',
    path: '/add',
    component:AddBlog
  },
  {
    path: '/blog/:id',
    component:SingleBlog
  },
  {
    name:'ListBlogs',
    path:'/list',
    component:ListBlogs
  }
]