<template>
    <div>
        <breadcrumb path="相关链接"></breadcrumb>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="0" class="demo-dynamic" style="width:70%;margin:0 15%;">
            <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :key="domain.key"
            :prop="'domains.' + index + '.name'">
            <el-input v-model="domain.name" placeholder="请输入链接地址"></el-input>
            <el-input v-model="domain.link" placeholder="请输入url">
                <el-button class="el-icon-circle-close" slot="append" @click.prevent="removeDomain(domain)" circle></el-button>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="addDomain">新增链接</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb.vue'
export default {
    components:{
        breadcrumb
    },
    data() {
      return {
        dynamicValidateForm: {
          domains: [],
          email: ''
        }
      };
    },
    methods: {
      submitForm() {
        var l = this.dynamicValidateForm.domains.length - 1
        var name =this.dynamicValidateForm.domains[l].name
        var link =this.dynamicValidateForm.domains[l].link
        this.$http.post('http://www.734976581.xyz:8081/api/setting', {
            name: name,
            link: link
        }).then(res => {
            if(res.data.code === 0 ) {
                this.$message({
                    message: res.data.message,
                    type: 'success'
                });
            }    
        })
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.$http.post('http://www.734976581.xyz:8081/api/setting/delete', {
            id:item._id
          }).then(res => {
              if(res.data.code === 0 ) {
                this.$message({
                    message: res.data.message,
                    type: 'success'
                });
                this.dynamicValidateForm.domains.splice(index, 1)
              }    
          })
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      getLink () {
        this.$http.get('http://www.734976581.xyz:8081/api/setting')
        .then(result => {
            result.data.linkinfo.forEach(value => {
                this.dynamicValidateForm.domains.push(value)
            });
        })
      }
    },
    created () {
        this.getLink()
    }
  }
</script>


<style>
.el-form-item{
    width: 46%;
    float: left;
    margin: 1rem 2%;
}
@media screen and (max-width: 800px){
    .el-form-item{
        width: auto;
    }
}
</style>
