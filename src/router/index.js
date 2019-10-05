import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home';
import Charades from '../components/pages/Charades';
import Setup from "../components/pages/Setup";

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
      path: '/kalamberry',
      name: 'kalamberry',
      component: Charades
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
  ]
})
