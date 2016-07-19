import _ from 'underscore'

import {
  TOGGLE_SIDEBAR,
  SET_SIDEBAR_ITEMS,
  SELECT_SIDEBAR_ITEM
} from './mutation-types'

// initial state
const state = {
  sidebarItems: [],
  sidebarShown: false
}

// mutations
const mutations = {
  [SET_SIDEBAR_ITEMS] (state, items) {
    state.sidebarItems = items
  },
  [SELECT_SIDEBAR_ITEM] (state, item) {
    state.sidebarItems = _.map(state.sidebarItems, (i) => {
      i.selected = i === item
      return i
    })
  },
  [TOGGLE_SIDEBAR] (state, toggle) {
    if (!_.isBoolean(toggle)) {
      toggle = !state.sidebarShown
    }
    state.sidebarShown = toggle
  }
}

export default {
  state,
  mutations
}
