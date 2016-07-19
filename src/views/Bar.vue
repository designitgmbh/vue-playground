<template>
  BAR is yet not implemented... stay tuned!
</template>
<script>
  import {alert as Alert} from 'vue-strap'

  export default {
    ready () {
      this.loadSidebar()
    },
    vuex: {
      actions: {
        loadSidebar: ({dispatch}) => dispatch('SET_SIDEBAR_ITEMS', [
          {text: 'General', description: 'Basic study settings', path: '/bar/general', icon: 'zi-cog', selected: false},
          {text: 'Notifications', description: 'Modify type of notifications', path: '/bar/notifications', icon: 'zi-notifications-outline', selected: false}
        ])
      }
    },
    components: {
      Alert
    }
  }
</script>