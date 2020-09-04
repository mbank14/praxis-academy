import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Administurator',
    component: () => import( /* webpackChunkName : "admin" */ '../views/Administurator.vue'),
    children :[
      {
        path: 'dashboard/:id',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "/dashboard" */ '../views/Dashboard.vue')
      },
      {
        path: 'log',
        // component: Log
        component: () => import(/* webpackChunkName: "/log" */ '../views/Log.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
