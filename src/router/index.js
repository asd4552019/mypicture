import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Classify from '@/components/classify'
import Search from '@/components/search'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/user',
      component: User
    }
  ]
})
