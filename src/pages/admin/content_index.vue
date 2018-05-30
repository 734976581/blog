<template>
  <div class="content_index">
    <breadcrumb path="文章管理"></breadcrumb>
    <section class="article_list">
      <div class="one_info" v-for="(data,index) in tableData" :key="index">
        <p>{{data.title}}</p>
        <p class="article-txt">
            <span>类别: <el-tag type="primary">{{data.category.name}}</el-tag></span>
            <span>阅读量: <el-tag type="primary">{{data.views}}</el-tag></span>
            <span>评论: <el-tag type="primary">{{data.comments.length}}</el-tag></span>
            
        </p>
        <p style="float:left">
          <span>发布时间: <el-tag type="primary">{{data.addTime}}</el-tag></span>
          <el-button type="primary" size="small">
            <router-link :to="{path: '/admin/content/edit', query:{id: data._id}}">编辑</router-link>
          </el-button>
          <el-button type="danger" size="small" @click="deleteContent(data._id)">删除</el-button>
        </p>
      </div>
    </section> 
    <div class="addArticle">
      <router-link to="/admin/content/add">+</router-link>
    </div>
    <pager :url='url' @getData="gotIt" v-if="render"></pager>
  </div>
</template>

<script type="es6">
  import pager from '../../components/pager.vue'
  import breadcrumb from '../../components/breadcrumb.vue'
  export default {
    data() {
      return {
        tableData: [],
        url: 'http://www.734976581.xyz:8081/admin/content?page=',
        render: true,
      }
    },
    methods: {
      gotIt(response) {
        console.log(response)
        response.data.contents.forEach((content) => {
          content.addTime = this.formatDate(content.addTime);
        })
        this.tableData = response.data.contents;
      },
      deleteContent(id) {
        this.$http.get('http://www.734976581.xyz:8081/admin/content/delete?id=' + id).then(response => {
          this.render = false;
          this.$nextTick(function () {
            this.render = true;
          })
          this.$message({
            message: response.data.message,
            type: 'success'
          });
        }, response => {
          console.log('error:' + response);
        })
      },
    },
    components: {
      breadcrumb,
      pager,
    }
  }
</script>

<style >
.el-button--small{
  margin-left: 10px;
}
.el-button--small a{
  color: #fff;
}
.el-button{
  background:inherit;
}
.el-button+.el-button{
  margin: none;
}
.article_list{
  width:90%;
  margin: 0 10%;
}
.one_info {
  float: left;
  width: 48%;
  padding:10px;
  margin: 0.5rem 1%;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
}
.one_info p{
  padding-left: 5%;
}
.addArticle{
  display: none;
}

@media screen and (max-width: 800px){
  .one_info {
    float: left;
    width: 96%;
    padding:10px;
    margin: 0.5rem 2%;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 10px;
  }
  .one_info p{
    padding-left: 0;
  }
  .addArticle{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #20a0ff;
    background: #20a0ff;
    font-size: 36px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    position: fixed;
    bottom: 6rem;
    right: 2rem;
    display: block;
}
.addArticle a{
  color: #fff;
}
}
</style>

