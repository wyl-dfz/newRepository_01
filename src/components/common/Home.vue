<template>
  <div class="Home">
    <sm-head></sm-head>
    <sm-sidebar></sm-sidebar>
    <div class="content" :class="{'content-collapse':collapse}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import smHead from './Header'
import smSidebar from './Sidebar'
import bus from './bus'
export default {
  name: 'Home',
  data () {
    return {
      collapse: false
    }
  },
  components: {
    smHead, smSidebar
  },
  created () {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
  .content {
    position: absolute;
    left: 235px;
    right: 15px;
    top: 60px;
    /*left: 225px;*/
    /*right: 5px;*/
    /*top: 55px;*/
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #FFFFFF;
    overflow-y: auto;
  }
  .content-collapse {
    left: 70px;
  }

</style>
