import Vuex from 'vuex'
import Vue from 'vue'

// Make vue aware of Vuex
Vue.use(Vuex)

const state = {
  url: '/',
  sideBarItems: [
    {text: 'Something', path: '#'},
    {text: 'Something Else', path: '#'}
  ],
  sideBarShown: true,
  topBarItems: [
    {text: 'Foo', path: '/foo'},
    {text: 'Bar', path: '/bar'}
  ]
}

const mutations = {
  SET_URL (state, url) {
    state.url = url
  },
  SET_SIDEBAR_ITEMS (state, items) {
    state.sideBarItems = items
  },
  SET_TOPBAR_ITEMS (state, items) {
    state.topBarItems = items
  },
  TOGGLE_SIDEBAR (state) {
    state.sideBarShown = !state.sideBarShown
  }
}

export default new Vuex.Store({
  state,
  mutations
})
