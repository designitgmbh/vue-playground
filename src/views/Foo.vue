<template>
  <alert type="success" dismissable>
    This is a FOO
  </alert>
</template>
<script>
  import {alert as Alert} from 'vue-strap'

  export default {
    components: {
      Alert
    }
  }
</script>