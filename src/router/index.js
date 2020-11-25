import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use() 注册Vue的插件
Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/heroes'
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: () => import(/* webpackChunkName: "heroes" */ '../views/heroes/List.vue')
  },
  {
    path: '/heroes/add',
    name: 'heroesadd',
    component: () => import(/* webpackChunkName: "heroes" */ '../views/heroes/Add.vue')
  },
  {
    path: '/heroes/edit/:id',
    name: 'heroesedit',
    component: () => import(/* webpackChunkName: "heroes" */ '../views/heroes/Edit.vue')
  },
  {
    path: '/weapons',
    name: 'weapons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "weapons" */ '../views/weapons/List.vue')
  },
  {
    path: '/equips',
    name: 'equips',
    component: () => import(/* webpackChunkName: "equips" */ '../views/equips/List.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
