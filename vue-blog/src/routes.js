import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import ListBlogs from './components/ListBlogs.vue'

export default[
  {
    path: '/',
    component:ShowBlogs
  },
  {
    path: '/add',
    component:AddBlog
  },
  {
    path: '/blog/:id',
    component:SingleBlog
  },
  {
    path:'/list',
    component:ListBlogs
  }
]