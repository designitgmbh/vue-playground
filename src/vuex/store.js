import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/components/sidebar/sidebar'
import topbar from './modules/components/topbar/topbar'

// Make vue aware of Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    topbar
  }
})
