import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loca: {},
    music: {},
    currentLang: 'en',
    authed: false,
    // form: [],
    // pin: '',
    // loading: false,
    // page: { name: '' , params:[]},
    // type: ''
  },
  mutations: mutations,
  actions: actions,
  getters: {},
  modules: {
  },
  plugins: [createPersistedState()]
})
