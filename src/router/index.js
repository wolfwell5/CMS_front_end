import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      name: 'Home',
      // component: HelloWorld
      component: Home
    }
  ]
})