<template>
  <nav class="navbar navbar-default topbar-nav">
      <div class="top-header">
        <div class="navbar-header">
          <a class="navbar-brand topbar-brand" v-link="{ path: '/' }" @click="toggleSidebar(false)">
              <img class="logo" src="../assets/img/logo.png">
              playground
          </a>
        </div>
      </div>
      <div id="navbar" class="navbar-collapse">
        <div>
          <ul class="nav navbar-nav">
            <li v-if="isNotRootRoute">
              <a @click="toggleSidebar" href="javascript:void(0)" :class="['animated', {'rotateIn': sidebarShown, 'zoomIn': !sidebarShown}]">
                <i :class="['zi', {'zi-menu' : !sidebarShown, 'zi-close': sidebarShown}]" ></i>
              </a>
            </li>
            <li v-for="item in items" :class="{ 'active' : isActive(item) }">
                <a @click="doUrlChange(item.path)"
                  v-link="{ path: item.path }">
                  {{item.text}}
                </a>
                <div v-show="isActive(item)" class="marker animated" transition="topBarItemToggle"></div>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import { items } from '../vuex/modules/components/topbar/getters'
import { sidebarShown } from '../vuex/modules/components/sidebar/getters'
import { toggleSidebar } from '../vuex/modules/components/sidebar/actions'
import { currentUrl } from '../vuex/getters'
import { changeUrl } from '../vuex/actions'

Vue.transition('topBarItemToggle', {
  enterClass: 'zoomIn',
  leaveClass: 'zoomOut'
})

export default {
  computed: {
    isNotRootRoute () {
      return this.$route.path.length > 1
    }
  },
  methods: {
    isActive (item) {
      return this.$route.path.indexOf(item.path) !== -1
    },
    doUrlChange (url) {
      this.changeUrl(url)
      this.toggleSidebar(true)
    }
  },
  vuex: {
    getters: {
      currentUrl,
      sidebarShown,
      items
    },
    actions: {
      changeUrl,
      toggleSidebar
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

    .topbar-nav .nav.navbar-nav > li > .marker
      border-bottom: 3px solid #8dc1ff

    @media(max-width:768px)
      .topbar-nav .nav > li
        display: inline-block

      .topbar-nav .navbar-collapse
          overflow: hidden
          overflow-x: auto

      .topbar-nav .navbar-nav
        width: 800px

</style>