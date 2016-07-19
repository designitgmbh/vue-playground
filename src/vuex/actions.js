import * as types from './mutation-types'

export const changeUrl = ({ dispatch }, url) => {
  dispatch(types.SET_URL, url)
}
