import Vue from 'vue'
import Router from 'vue-router'
import MainGameComponent from "./components/MainGameComponent";
import Home from "./views/Home";
// import WordsComponent from "./components/WordsComponent";
import SimpleGame from "./views/SimpleGame"

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
      path: '/main',
      name: 'main',
      component: MainGameComponent
    },
    {
      path: '/words',
      name: 'words',
      component: SimpleGame
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
