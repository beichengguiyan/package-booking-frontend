import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Submit from './views/Submit.vue'
import TodoList from './views/TodoList.vue'
import Appointment from './views/Appointment.vue'


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
      path: '/submit',
      name: 'submit',
      component: Submit
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment
    }
  ]
})
