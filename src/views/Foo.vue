<template>
  <alert
    :show.sync="alertShown"
    type="success"
    width="400px"
    placement="top-right"
    dismissable
  >
    <span class="icon-ok-circled alert-icon-float-left"></span>
    <strong>Here you go!</strong>
    <p>This is your FOO</p>
  </alert>
  <button class="btn btn-default btn-lg"
    @click="alertShown = !alertShown">
    <span v-if="!alertShown">Show</span>
    <span v-else>Hide</span> 
    me FOO
  </button>
</template>
<script>
  import {alert as Alert} from 'vue-strap'
  import { setSidebarItems } from '../vuex/modules/components/sidebar/actions'

  export default {
    data  () {
      return {
        alertShown: false
      }
    },
    ready () {
      this.setSidebarItems([
        {text: 'Participant dashboard', description: 'Allows tracking progress', path: '/foo/dashboard', icon: 'zi-chart-pie', selected: false}
      ])
    },
    vuex: {
      actions: {
        setSidebarItems
      }
    },
    components: {
      Alert
    }
  }
</script>