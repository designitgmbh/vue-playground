<template>
  <nav class="navbar navbar-default topbar-nav">
      <div class="top-header">
        <div class="navbar-header">
        <a class="navbar-brand topbar-brand" v-link="{ path: '/' }">
            <img class="logo" src="../assets/img/logo.png">
            playground
        </a>
      </div>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li v-for="item in items">
            <a v-bind:class="{ 'active' : item.path == this.currentUrl  }" @click="changeUrl(item.path)" v-link="{ path: item.path }">{{item.text}}</a>
          </li>
      </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {text: 'Foo', path: '/foo'},
        {text: 'Bar', path: '/bar'}
      ]
    }
  },
  vuex: {
    getters: {
      currentUrl: state => state.url
    },
    actions: {
      changeUrl: ({ dispatch }, url) => dispatch('SET_URL', url)
    }
  }
}
</script>
<style lang="stylus">
    .topbar-nav
      margin-bottom: 0px
      min-height: 60px
      background-color: #fafafa

    .topbar-nav .top-header
      height: 60px
      background-color: #232323

    .topbar-nav .topbar-brand 
      height: 60px
      font-size: 18px
      width: 250px

    .topbar-nav .topbar-brand a
      color: #999999

    .topbar-nav .topbar-brand img
      width: 30px
      height: 30px
      display: inline

    .topbar-nav .topbar-brand a:hover
      color: #fff
      background: none

    .topbar-nav .nav.navbar-nav > li > a
      line-height: 30px

    .topbar-nav .nav.navbar-nav > li > a.active
      border-bottom: 3px solid #8dc1ff

</style>