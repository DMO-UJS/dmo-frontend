import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Search from '@/components/Search'
import AjaxTest from '@/components/AjaxTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
    	path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/ajaxTest',
      name: 'AjaxTest',
      component: AjaxTest
    }
  ]
})
