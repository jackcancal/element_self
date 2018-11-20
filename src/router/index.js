import Vue from 'vue'
import Router from 'vue-router'
import select from '../components/select'
import color_select from '../components/color_select'
import date_picker from '../components/date_picker'

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})
