<template>
  <div class="admin_index">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  :collapse="isCollapse" router>
      <el-menu-item index="/admin/welcome">
        <i class="icon-shouye"></i>
        <span slot="title">后台主页</span>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i class="icon-yonghu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/category">
          <i class="icon-fenlei-copy"></i>
          <span slot="title">分类管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="icon-wenzhang"></i>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item index="/admin/content">文章列表</el-menu-item>
        <el-menu-item index="/admin/content/add">新建文章</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="icon-shezhi"></i>
          <span slot="title">设置</span>
        </template>
        <el-menu-item index="/admin/setting">个人设置</el-menu-item>
        <el-menu-item index="/">退出</el-menu-item>
      </el-submenu>
    </el-menu>
     <el-switch  v-model="isCollapse" class="chooseSw" style="position: absolute;bottom: 1rem;left: 0%;"></el-switch>
     <div class="menu">
       <ul>
         <li>
           <router-link to="/admin/content" active-class="active">
              <i class="icon-wenzhang"></i>
              <p>文章管理</p> 
           </router-link>
         </li>
         <li>
           <router-link to="/admin/user" active-class="active">
              <i class="icon-yonghu"></i>
              <p>用户管理</p> 
           </router-link>
         </li>
         <li>
           <router-link to="/admin/welcome" active-class="active">
              <i class="icon-shouye"></i>
              <p>后台主页</p>  
           </router-link>
         </li>
         <li>
           <router-link to="/admin/category" active-class="active">
              <i class="icon-fenlei-copy"></i>
              <p>分类管理</p> 
           </router-link>
         </li>
         <li>
           <router-link to="/admin/setting" active-class="active">
              <i class="icon-shezhi"></i>
              <p>相关设置</p> 
           </router-link>
         </li>
       </ul>
     </div>
    <router-view id="levelTwo"></router-view>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        adminName: '',
        isCollapse: true
      }
    },
    created() {
      this.$http.get('http://www.734976581.xyz:8081/admin').then(response => {
          this.adminName = response.data.userInfo.username;
          console.log(response)
          return;
      }, response => {
        console.log('error:' + response);
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
@import '/static/css/iconfont1.css';

.admin_index{
  display:flex;
}
  #levelTwo{
    position: relative;
    display:flex;
    align-items:center;
    justify-contents:center;
    flex-direction:column;
    padding-top:50px;
    min-height:100vh;
    flex:1;

  }
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
  min-height: 400px;
}
[class*=" icon-"], [class^=icon-] {
    font-size: 22px;
    line-height: 2;
}
.menu{
  position: fixed;
  display: none;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-radius: 5px 5px 0 0 ;
  z-index: 99999;
}
.menu ul{
  float: left;
  width: 100%;
}
.menu ul li{
  width: 20%;
  float: left;
  text-align: center;
}
.menu ul li>a{
  display: block;
  color: #444;
}

.active i,
.active p{
  color:#409eff;
}
@media screen and (max-width: 768px){
  .el-menu-vertical-demo,
  .chooseSw{
    display: none;
  }
  .menu{
    display: block;
  }
  .menu ul{
    padding-left: 0;
  }
  .active{
    background-color: inherit;
  }
}
</style>
