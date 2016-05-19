import Vue from 'vue'
import VueRouter from 'vue-router'
import Sidebar from './components/Sidebar'
import './assets/css/index.styl'
import 'bootstrap/less/bootstrap.less'

Vue.use(VueRouter)

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
    Sidebar
  },
  data () {
    return {
      sidebarHidden: false
    }
  }
}), '#app')
