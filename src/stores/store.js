import Vuex from 'vuex'
import Vue from 'vue'

// Make vue aware of Vuex
Vue.use(Vuex)

const state = {
  url: '/'
}

const mutations = {
  SET_URL (state, url) {
    state.url = url
  }
}

export default new Vuex.Store({
  state,
  mutations
})
