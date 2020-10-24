import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
const Home = () => import('./views/home/Index.vue')
const About = () => import('./views/about/Index.vue')
const Services = () => import('./views/services/Index.vue')
const Tools = () => import('./views/tools/Index.vue')
const Data = () => import('./views/tools/data.vue')

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
    {
      path: '/tools',
      name: 'tools',
      component: Tools,
    },
    {
      path: '/tools/data',
      name: 'data',
      component: Data,
    },
  ],
})
