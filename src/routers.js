import ShowBlog from "./components/ShowBlog.vue"
import AddBlog from "./components/AddBlog.vue"
import SingleBlog from "./components/SingalBlog.vue"
import Login from "./components/login.vue"
export default[
   {path:"/",component:ShowBlog},
   {path:"/add",component:AddBlog,meta:{requiresAuth: true}},
   {path:"/single/:id",component:SingleBlog},
   {path:"/login",component:Login},
]

