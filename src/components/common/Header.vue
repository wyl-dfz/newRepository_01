<template>
  <div class="header" :class="{'content-collapse':collapse}">
    <!--折叠按钮-->
    <div class="collapse-btn" @click="collapseChage">
      <i :class="collapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
    <!--折叠按钮-->

    <!--左边头像-->
    <div class="head_right">
      <div class="user-avator"><img src="../../assets/header.jpeg"></div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="hover" @command="handleCommand">
              <span class="el-dropdown-link">
                  {{username}} <i class="el-icon-caret-bottom"></i>
              </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--左边头像-->

  </div>
</template>

<script>
import bus from '../common/bus'

export default {
  name: 'Header',
  data () {
    return {
      collapse: false,
      username: 'soyMilk'
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand (command) {
      if (command === 'loginout') {
        sessionStorage.removeItem('token')
        this.$router.push('/login')
      }
    },
    // 侧边栏折叠
    collapseChage () {
      this.collapse = !this.collapse
      bus.$emit('collapse', this.collapse)
    }
  }
}
</script>

<style scoped>
  .user-name {
    margin-left: 10px;
    color: #393939;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }

  .user-avator {
    display: inline-block;
  }

  .user-avator img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #393939;
  }

  .head_right {
    margin-left: 30px;
    margin-right: 10px;
    float: right;
    line-height: 50px;
  }

  .collapse-btn i {
    font-size: 26px;
    font-style: normal;
    line-height: 50px;
  }

  .collapse-btn {
    position: relative;
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }

  .logo-text {
    margin-left: 15px;
  }

  .header {
    color: #393939;
    background: #fff;
    height: 50px;
    left: 220px;
    position: absolute;
    right: 0;
    border-bottom: 1px solid #EEE;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
  }

  .content-collapse {
    left: 65px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
  }
</style>
