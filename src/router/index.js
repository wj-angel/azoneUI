import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Profile from '../pages/profile'
import Team from '../pages/team'
import Response from '../pages/response'
import Ask from '../pages/ask'
import Journal from '../pages/journal'
import Mobile from '../pages/mobile'
import Assembly from '../pages/assembly'
import Show from '../pages/show'
import Showht from '../pages/showht'
import Business from '../pages/business'
import compents from "../pages/components"
import dowork from "../pages/dowork"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: "/dowork",
      name: "dowork",
      component: dowork
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/compents',
      name: 'compents',
      component: compents
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    },
    {
      path: '/response',
      name: 'Response',
      component: Response
    },
    {
      path: '/journal',
      name: 'Journal',
      component: Journal
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile
    },
    {
      path: '/record',
      name: 'Record',
      // component: Record
      component: resolve=>require(['../pages/record'],resolve)
    },
    {
      path: '/assembly',
      name: 'Assembly',
      component: Assembly
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/showht',
      name: 'Showht',
      component: Showht
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    }
  ]
})
