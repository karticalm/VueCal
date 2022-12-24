import Vue from 'vue'
import Router from 'vue-router'
import Calculator from './components/Calculator.vue'
import History from './components/History.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/calculator'
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})
