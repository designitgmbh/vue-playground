import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// resources
import './assets/stylus/index.styl'
import './assets/icons/zondicons/style.css'
import './assets/css/animate.css'
import 'bootstrap/less/bootstrap.less'
import 'font-awesome/css/font-awesome.css'
import './resources/transitions'

// components
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import store from './vuex/store'
import { sidebarShown } from './vuex/modules/components/sidebar/getters'

Vue.use(VueRouter)
Vue.use(VueResource)

// emulate REST PUT, PATCH and DELETE methods
Vue.http.options.emulateHTTP = true

// Create a router instance.
// You can pass in additional options
// here, but let's keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component.
// The "component" can either be an actual component
// constructor created via Vue.extend(), or just a component options object.
router.map(require('./routes').default)

// Now we can start the app!
// The router will create an instance of App and
// mount to the element matching the selector #app.
router.start(Vue.extend({
  components: {
    Sidebar,
    Topbar
  },
  store,
  vuex: {
    getters: {
      sidebarShown
    }
  }
}), '#app')
