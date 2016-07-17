<template>
  <ul class="sidebar-nav">
      <li v-for="item in items">
          <a v-bind:class="{ 'active' : item.selected }" 
             @click="selectSidebarItem(item)"
             v-link="{ path: item.path }"
          >
            <div class="row">
              <div class="col-xs-2 col-sm-2">
                <div class="icon"><i :class="['zi', item.icon]"></i></div>
              </div>
              <div class="col-xs-10 col-sm-10">
                <div class="text">{{item.text}}</div>
                <div class="description">{{item.description}}</div>
              </div>
            </div>
          </a>
      </li>
  </ul>
</template>

<script>
export default {
  vuex: {
    getters: {
      currentUrl: state => state.url,
      sideBarShown: state => state.sideBarShown,
      items: state => state.sideBarItems
    },
    actions: {
      changeUrl: ({ dispatch }, url) => dispatch('SET_URL', url),
      selectSidebarItem: ({ dispatch }, item) => dispatch('SELECT_SIDEBAR_ITEM', item),
      toggleSideBar: ({ dispatch }) => dispatch('TOGGLE_SIDEBAR')
    }
  }
}
</script>
<style lang="stylus">
    .sidebar-nav
        position: absolute
        top: 0
        width: 100%
        margin: 0
        padding: 0
        list-style: none

    .sidebar-nav li
        text-indent: 20px
        line-height: 40px

    .sidebar-nav li a
        display: block
        text-decoration: none
        color: #999999
        padding: 20px 0px

    .sidebar-nav li a:hover
        text-decoration: none
        background: rgba(255,255,255,0.2)

    .sidebar-nav li a.active
        color: #4e729d
        font-weight: bold

    .sidebar-nav li .text
      line-height: 30px

    .sidebar-nav li .description
      font-size: 12px
      color: #c3c3c3
      line-height: 20px

    .sidebar-nav li a.active .description
      color: #b9cadf
</style>