<template>
	<div style="height:100%;">
		<img src="/static/image/timg.jpg" alt="" class="bgImg">
		<div class="login" v-if="show">
			<el-input v-model="username" placeholder="用户名" class="user_input"></el-input>
			<el-input v-model="password" type="password" placeholder="密码" class="pass_input"></el-input>
			<router-link to="" class="letRegist" @click.native="show1">还没注册?点击注册</router-link>
			<el-button  class="button_ss" @click="login">登陆</el-button>
		</div>
		<div class="login" v-else>
			<el-input v-model="username" placeholder="用户名" class="user_input"></el-input>
			<el-input v-model="password" type="password" placeholder="密码" class="pass_input"></el-input>
			<el-input v-model="re_password" type="password" placeholder="确认密码" class="pass_input"></el-input>
			<router-link to="" class="letRegist"  @click.native="show1">已经注册?点击登陆</router-link>
			<el-button  class="button_ss" @click="register">注册</el-button>
		</div>
		<footer id="footer" class="footer">
			<div class="outer">
				<div id="footer-info">
					<div class="footer-left">
						© 2018 734976581
					</div>
					<div class="footer-right">
						<a href="http://hexo.io/" target="_blank">Hexo</a>  Theme <a href="https://github.com/litten/hexo-theme-yilia" target="_blank">yilia</a> by chenbiao
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			username: '',
			password: '',
			re_password: '',
			show: true
		}
	},
	methods: {
		login () {
			this.$http.post('http://www.734976581.xyz:8081/api/user/login', {
				username: this.username,
				password: this.password
			}).then(result => {
				console.log(result)
				if(result.data.code === 0){
					this.$message({
						message: '登陆成功!',
						type: 'success'
					})
					if(result.data.userInfo.isAdmin){
						this.$router.push('/admin/welcome')
					} else {
						this.$router.push('/')
					}
				} else {
					this.$message({
						message: '用户名或者密码错误!',
						type: 'warning'
					})
					this.username = ''
					this.password = ''
					return
				}
			})
		},
		register () {
			this.$http.post('http://www.734976581.xyz:8081/api/user/register', {
				username: this.username,
				password: this.password,
				repassword: this.re_password
			}).then(result => {
				console.log(result)
				if(result.data.code === 0){
					this.$message({
						message: '注册成功!',
						type: 'success'
					})
					this.show = true
				} else {
					this.$message({
						message: '用户名已被注册!',
						type: 'warning'
					})
					this.username = ''
					this.password = ''
					this.re_password = ''
					return
				}
			})
		},
		show1 () {
			this.show = !this.show
		}
	}
}
</script>

<style>
.el-input__inner{
	background-color: rgba(0, 0, 0, 0);
	border-radius: 0;
	border:none;
	border-bottom: 1px solid #fff;
	color: #fff;
}
.el-button{
	background: rgba(0, 0, 0, 0);
	border: none;
	color: #fff;
}
	.bgImg{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.login{
		width: 20%;
		position: absolute;
		top: 12rem;
		left: 40%;
	}
	.user_input,
	.pass_input{
		margin:1rem 0;
	}
	.button_ss{
		width: 100%;
		margin: 2rem 0;
	}
	.letRegist{
		font-size: 12px;
		display: block;
		text-align: right;
		color: #ccc;
	}
	@media only screen and (max-width:768px) {
		img{
			max-width:none!important;
		}
		.bgImg{
			height: 100%;
			width: auto;
		}
		.login{
			width: 60%;
			position: absolute;
			top: 12rem;
			left: 20%;
		}
		.footer {
			position: absolute!important;
		}
	}
</style>
