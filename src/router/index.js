import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home';
import Charades from '../components/pages/Charades';
import Setup from "../components/pages/Setup";
import store from "../store"
Vue.use(Router)

function requireOptions(to,from,next) {
  if(store.state.selectedCategories.length === 0) {
    next('/setup');
  } else {
    next();
  }      
}   

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
      component: Charades,
      beforeEnter: requireOptions
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
  ]
})
