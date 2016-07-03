<template>
  <ul class="sidebar-nav">
      <li v-for="item in items">
          <a v-link="{ path: item.path }">{{item.text}}</a>
      </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {text: 'Something', path: '#'},
        {text: 'Something Else', path: '#'}
      ]
    }
  }
}
</script>
<style lang="stylus">
    .sidebar-nav
        position: absolute
        top: 0
        width: 250px
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

    .sidebar-nav li a:hover
        text-decoration: none
        color: #000
        background: rgba(255,255,255,0.2)

    .sidebar-nav li a:active,
    .sidebar-nav li a:focus
        text-decoration: none
</style>