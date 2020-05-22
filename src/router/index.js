import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      redirect: '/dashboard',
      meta: {
        title: '首页',
        requiresAuth: true // 是否需要判断是否登录
      },
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../view/Dashboard.vue'], resolve),
          meta: {title: '系统首页'}
        },
        {
          path: '/security/user/list',
          component: resolve => require(['../view/security/user/list.vue'], resolve)
        },
        {
          path: '/security/user/add',
          component: resolve => require(['../view/security/user/add.vue'], resolve)
        },
        {
          path: '/security/user/modify',
          component: resolve => require(['../view/security/user/modify.vue'], resolve)
        },
        {
          path: '/security/role/list',
          component: resolve => require(['../view/security/role/list.vue'], resolve)
        },
        {
          path: '/security/role/add',
          component: resolve => require(['../view/security/role/add.vue'], resolve)
        },
        {
          path: '/security/role/modify',
          component: resolve => require(['../view/security/role/modify.vue'], resolve)
        },
        {
          path: '/security/menu/list',
          component: resolve => require(['../view/security/menu/list.vue'], resolve)
        },
        {
          path: '/security/menu/add',
          component: resolve => require(['../view/security/menu/add.vue'], resolve)
        },
        {
          path: '/security/menu',
          component: resolve => require(['../view/security/Menu.vue'], resolve)
        },
        {
          path: '/daily/list',
          component: resolve => require(['../view/daily/list.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../view/login.vue'], resolve)
    }
  ]
})
