import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import User from '../pages/user.vue'
import shoppingCart from  '../pages/shoppingcart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'/shopping',
      name:'shoppingCart',
      component:shoppingCart
    }
  ]
})
