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

  export default {
    data  () {
      return {
        alertShown: false
      }
    },
    ready () {
      this.loadSidebar()
    },
    vuex: {
      actions: {
        loadSidebar: ({dispatch}) => dispatch('SET_SIDEBAR_ITEMS', [
          {text: 'Participant dashboard', description: 'Allows tracking progress', path: '/dashboard', icon: 'zi-chart-pie', selected: false}
        ])
      }
    },
    components: {
      Alert
    }
  }
</script>