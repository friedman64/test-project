import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/t_page1',
      name: 'test-page-1',
      component: () => import(/* webpackChunkName: "testPage1" */ './views/TestPage1.vue')
    }
  ]
})
