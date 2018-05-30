<template>
  <div class="user_index">
    <breadcrumb path="用户管理"></breadcrumb>
    <el-table
      :data="tableData"
      border
      style="width: 80%">
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="isAdmin"
        label="是否是管理员">
      </el-table-column>
    </el-table>
    <pager :url='url' @getData="gotIt"></pager>
  </div>
</template>

<script type="es6">
  import pager from '../../components/pager.vue'
  import breadcrumb from '../../components/breadcrumb.vue'
  export default {
    data() {
      return {
        tableData: [],
        url: 'http://www.734976581.xyz:8081/admin/user?page=',
      }
    },
    created() {
      // this.getData(this.page);
    },
    methods: {
      gotIt(response) {
        let users = response.data.users;
        for (let i = 0; i < users.length; i++) {
          users[i].isAdmin = users[i].isAdmin ? '是' : '';
        }
        this.tableData = response.data.users;
      }
    },
    components: {
      pager,
      breadcrumb
    }
  }
</script>

<style>
table{
  width: auto;
}
td{
  text-align: center;
}
.el-table th>.cell{
  text-align: center;
}
.el-table .cell, .el-table th>div{
  padding: 0 10px;
}
@media screen and (max-width: 800px) {
  table{
    width: 330px!important;
  }
}
</style>
