import Vue from 'vue'
import Router from 'vue-router'
import MainGameComponent from "../components/MainGameComponent";
import Home from '../components/pages/Home';
// import WordsComponent from "./components/WordsComponent";
import SimpleGame from "../components/pages/SimpleGame"

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
  ]
})
