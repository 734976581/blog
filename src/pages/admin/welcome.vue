<template>
    <div>
        <p>欢迎你，{{adminName}}</p>
        <el-button type="info" @click="logout">退出登陆</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            adminName: ''
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
        logout(){
            this.$http.get('http://www.734976581.xyz:8081/api/user/logout')
                .then(res =>{
                    if(res.data.code === 0){
                        this.$message({
                            message:res.data.message,
                            type:'success'
                        })
                        this.$router.push('/login')
                    }
                })
        }
    }
}
</script>

<style>

</style>
