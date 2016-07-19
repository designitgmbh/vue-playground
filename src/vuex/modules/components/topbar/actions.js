import * as types from './mutation-types'

export const setTopbarItems = ({ dispatch }, items) => {
  dispatch(types.SET_TOPBAR_ITEMS, items)
}