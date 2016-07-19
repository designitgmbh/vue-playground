<template>
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <li v-for="item in items">
            <a :class="{ 'active' : item.selected }" 
               @click="selectSidebarItem(item)"
               v-link="{ path: item.path }"
            >
              <div class="row">
                <div class="col-xs-2 col-sm-2 icon">
                    <i :class="['zi', item.icon]"></i>
                </div>
                <div class="col-xs-10 col-sm-10 data">
                  <div class="text">{{item.text}}</div>
                  <div class="description">{{item.description}}</div>
                </div>
              </div>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
import { items } from '../vuex/modules/components/sidebar/getters'
import { selectSidebarItem } from '../vuex/modules/components/sidebar/actions'

export default {
  vuex: {
    getters: {
      items
    },
    actions: {
      selectSidebarItem
    }
  }
}
</script>
<style lang="stylus">
    @import '../assets/stylus/variables.styl'

    #sidebar-wrapper
      z-index: 1000
      position: fixed
      left: side_bar_width
      width: side_bar_width
      height: 100%
      margin-left: -1 * side_bar_width
      overflow-y: auto
      background: side_bar_background
      -webkit-transition: all 0.5s ease
      -moz-transition: all 0.5s ease
      -o-transition: all 0.5s ease
      transition: all 0.5s ease

    .sidebar-nav
      position: absolute
      top: 0
      width: 100%
      margin: 0
      padding: 0
      list-style: none

    .sidebar-nav li
      line-height: 50px

    .sidebar-nav li a
      display: block
      text-decoration: none
      color: side_bar_text_color
      padding: 20px 0px

    .sidebar-nav li a:hover
      text-decoration: none
      background: rgba(255,255,255,0.2)

    .sidebar-nav li a.active
      color: side_bar_text_color_active
      font-weight: bold

    .sidebar-nav li .text
      line-height: 30px

    .sidebar-nav li .description
      font-size: 12px
      color: lighten(side_bar_text_color, 15)
      line-height: 20px

    .sidebar-nav li a.active .description
      color: lighten(side_bar_text_color_active, 30)

    .sidebar-nav li .icon
      text-indent: 20px
      padding-right: 0px
</style>