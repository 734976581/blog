import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/main/index.vue'
import index_list from '../pages/main/index_list.vue'
import view from '../pages/main/view.vue'
import  admin_index from '../pages/admin/index.vue'
import login from '../pages/admin/login.vue'
import setting from '../pages/admin/setting.vue'
import user_index from '../pages/admin/user_index.vue'
import welcome from '../pages/admin/welcome.vue'
import category_index from '../pages/admin/category_index.vue'
import content_index from '../pages/admin/content_index.vue'
import content_add from '../pages/admin/content_add.vue'
import content_edit from '../pages/admin/content_edit.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/',
      component: index_list,
    },
    {
      path: '/view',
      component: view
    },
    {
      path: '/index_list',
      component: index_list
    },
    {
      path: '/category',
      component: index_list
    },
    
    {
      path: '/login',
      component:login ,
    },
    {
      path: '/admin/index',
      component: admin_index,
      children:[{
        path:'/admin/welcome',
        component: welcome
      },{
        path: '/admin/user',
        component: user_index
      },
      {
        path: '/admin/category',
        component: category_index
      },
      {
        path: '/admin/content',
        component: content_index
      },
      {
        path: '/admin/content/add',
        component: content_add
      },
      {
        path: '/admin/content/edit',
        component: content_edit
      },
      {
        path: '/admin/setting',
        component: setting
      }]
    },
    
  ]
})
