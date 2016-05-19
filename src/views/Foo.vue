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
    components: {
      Alert
    },
    data  () {
      return {
        alertShown: false
      }
    }
  }
</script>