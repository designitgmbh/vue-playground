import * as types from './mutation-types'

export const setSidebarItems = ({ dispatch }, items) => {
  dispatch(types.SET_SIDEBAR_ITEMS, items)
}
export const selectSidebarItem = ({ dispatch }, item) => {
  dispatch(types.SELECT_SIDEBAR_ITEM, item)
}
export const toggleSidebar = ({ dispatch }, toggle) => {
  dispatch(types.TOGGLE_SIDEBAR, toggle)
}

