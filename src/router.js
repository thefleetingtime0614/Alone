import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pins from './views/Pins.vue'
import Topics from './views/Topics.vue'
import Books from './views/Books.vue'
import Events from './views/Event.vue'
import All from './views/Event/All.vue'
import Active from './views/Home/Active.vue'
import Content from './views/Books/Content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'',
          component:Active
        }
      ]
    },
    {
      path:'/pins',
      component:Pins
    },
    {
      path:'/topics',
      component:Topics
    },
    {
      path:'/books',
      component:Books,
      children:[
        {
          path:'',
          component:Content
        }
      ]
    },
    {
      path:'/events',
      component:Events,
      children:[
        {
          path:'all',
          component:All
        },
        {
          path:'',
          redirect:'/events/all'
        }
      ]
    }
  ]
})
