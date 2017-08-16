import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FontReference from '@/components/fontreference'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fontreference',
      name: 'fontreference',
      component: FontReference
    }
  ]
})
