import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Index.vue'
import About from '@/views/about/Index.vue'
import Services from '@/views/services/Index.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
  ],
})
