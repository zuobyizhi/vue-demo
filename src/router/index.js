import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FontReference from '@/components/fontreference'
import Tomato from '@/components/tomato'
import HttpTest from '@/components/httptest'
import Register from '@/components/register'
import Login from '@/components/login'
import TodoListAdd from '@/components/todolistadd'
import TodoListUpdate from '@/components/todolistupdate'

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
      path: '/todolistupdate',
      name: 'todolistupdate',
      component: TodoListUpdate
    },
    {
      path: '/todolistadd',
      name: 'todolistadd',
      component: TodoListAdd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/fontreference',
      name: 'fontreference',
      component: FontReference
    }
  ]
})
