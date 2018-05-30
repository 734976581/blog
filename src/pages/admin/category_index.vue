<template>
  <div class="category_index">
    <breadcrumb path="分类管理"></breadcrumb>
    <div style="width:90%;margin:1rem 5%;">
      <el-tag
        :key="index"
        v-for="(tag,index) in dynamicTags"
        closable
        :disable-transitions="false"
        @close="deleteCategory(tag._id)">
        {{tag.name}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
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
        url: 'http://www.734976581.xyz:8081/admin/category?page=',
        render: true,
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      gotIt(response) {
        this.dynamicTags = response.data.categories;
      },
      deleteCategory(id) {
        this.$http.get('http://www.734976581.xyz:8081/admin/category/delete?id=' + id).then(response => {
          let that = this;
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
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (!inputValue) {
          this.$message({
            message: '分类名不能为空',
            type: 'warning'
          });
          return;
        } else {
          this.$http.post('http://www.734976581.xyz:8081/admin/category/add', {
            name: inputValue
          }).then(response => {
            if (response.data.code != 0) {
              this.$message({
                message: response.data.message,
                type: 'warning'
              });
            } else {
              this.$message({
                message: response.data.message,
                type: 'success'
              })
            }
          }, response => {
            console.log('error:' + response);
          })
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
    components: {
      breadcrumb,
      pager,
    },
    mounted () {
      var level = document.getElementById('levelTwo')
      level.style.display = 'block'
    }
  }
</script>

<style scoped>
.el-tag {
    margin:10px ;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
