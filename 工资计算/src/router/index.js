import Vue from 'vue'
import Router from 'vue-router'
import Salary from '@/components/Salary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Salary',
      component: Salary
    }
  ]
})
