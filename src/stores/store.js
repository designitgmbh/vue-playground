import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'underscore'

// Make vue aware of Vuex
Vue.use(Vuex)

const state = {
  url: '/',
  sideBarItems: [],
  sideBarShown: false,
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
  SELECT_SIDEBAR_ITEM (state, item) {
    state.sideBarItems = _.map(state.sideBarItems, (i) => {
      i.selected = i === item
      return i
    })
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
