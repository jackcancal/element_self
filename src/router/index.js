import Vue from 'vue'
import Router from 'vue-router'
import select from '../components/select'
import color_select from '../components/color_select'
import date_picker from '../components/date_picker'
import tree from '../components/tree.vue'
import date from '../components/date.vue'
import newChannel from '../components/newChannel.vue'
import b from '../components/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'newChannel'
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/color_select',
      name: 'color_select',
      component: color_select
    },
    {
      path: '/date_picker',
      name: 'date_picker',
      component: date_picker
    },
    {
      path: '/tree',
      name: 'tree',
      component: tree
    },
    {
      path: '/date',
      name: 'date',
      component: date
    },
    {
      path: '/newChannel',
      name: 'newChannel',
      component: newChannel
    },
    {
      path: '/b',
      name: 'b',
      component: b
    },
    {
      path: '/songhelouTable',
      component: ()=> import('../components/songhelouTable')
    }
  ]
})
