import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FontReference from '@/components/fontreference'
import Tomato from '@/components/tomato'
import HttpTest from '@/components/httptest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tomato',
      name: 'tomato',
      component: Tomato
    },
    {
      path: '/httptest',
      name: 'httptest',
      component: HttpTest
    },
    {
      path: '/fontreference',
      name: 'fontreference',
      component: FontReference
    }
  ]
})
