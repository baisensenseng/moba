import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'
import Video from '../views/Video.vue'
import Alysisvideo from '../views/Alysisvideo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path: '/', name: 'home', component: Home},
      {path: '/articles/:id', name: 'article', component: Article, props: true},
    ]
  },
  {
    path:'/heroes/:id', name: 'hero', component: Hero, props: true
  },
  {
    path:'/analysisvideo', name: 'analysisvideo', component: Alysisvideo, props: true, meta: { title: '洪专属页面' }
  },
  {
    path:'/videos/:id', name: 'video', component: Video, props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
