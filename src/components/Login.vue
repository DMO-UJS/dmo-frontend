<template>
	<div class="login" id="login">
		<form>
			<input type="text" placeholder="用户名/邮箱/手机号" :class="'log-input' + (account==''?' log-input-empty':'')" v-model="account">
			<input type="password" placeholder="密码" :class="'log-input' + (password==''?' log-input-empty':'')"  v-model="password">
			<button class="log-btn" @click="login">Login</button>
		</form>
	</div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: '',
      loginUrl: ''
    }
  },
  methods: {
  	login: function () {
  		// 判断用户名和密码是否为空，不为空则Login
  		if (this.account != '' || this.password != '') {
  			this.toLogin()
  		} else {
  			alert("用户名或密码不能为空")
  		}
  	},
  	toLogin: function () {
  		// 前后端统一密码的加密规则，这里使用哈希算法（./js/sha1.min.js）
  		let password_sha = hex_sha1(hex_sha1( this.password ));

  		// 向后端发送的登录参数
  		let loginParam = {
  			account: this.account,
  			password_sha
  		}

      // 发送请求
  		// this.$http.post(this.loginUrl, loginParam)
  		// 		.then(response) => {

  		// 		}
  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	margin: 5% auto;
	width: 500px;
}
.log-input {
	width: 370px;overflow: hidden; padding: 0 15px;font-size: 13px; border: 1px solid #EBEBEB;
	margin:0 auto 15px; height: 48px; line-height: 48px; -webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-ms-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
}

.log-input-empty {border: 1px solid #f37474 !important;}

.log-btn{
	width:402px; display: block; text-align: center; line-height: 50px;margin:0 auto 15px; height:50px; 
	color:#fff; font-size:13px;background-color: #3B5999;
	-webkit-border-radius: 5px; 
	border-radius: 5px;
	position: relative;
}
</style>