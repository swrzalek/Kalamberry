import Vue from 'vue'
import Vuex from 'vuex'
import getters from './store/getters';
import actions from './store/actions';
import mutations from './store/mutations';
import state from './store/state'

Vue.use(Vuex)

export default new Vuex.Store({
  getters, actions, mutations, state
})
