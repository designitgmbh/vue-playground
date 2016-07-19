import {
  SET_TOPBAR_ITEMS
} from '../../../mutation-types'

// initial state
const state = {
  topbarItems: [
    {text: 'Foo', path: '/foo'},
    {text: 'Bar', path: '/bar'}
  ]
}

const mutations = {
  [SET_TOPBAR_ITEMS] (state, items) {
    state.topbarItems = items
  }
}

export default {
  state,
  mutations
}
