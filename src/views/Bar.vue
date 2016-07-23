<template>
  BAR is yet not implemented... stay tuned!
</template>
<script>
  import { setSidebarItems } from '../vuex/modules/components/sidebar/actions'

  export default {
    ready () {
      this.setSidebarItems([
        {text: 'General', description: 'Basic study settings', path: '/bar/general', icon: 'zi-cog', selected: false},
        {text: 'Notifications', description: 'Modify type of notifications', path: '/bar/notifications', icon: 'zi-notifications-outline', selected: false}
      ])
    },
    vuex: {
      actions: {
        setSidebarItems
      }
    }
  }
</script>