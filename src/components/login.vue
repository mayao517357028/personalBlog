


<template>
	<div class="login">
	  <div class="">
	  	   <label for="name">姓名：</label>
           <input type="text"  id="name"/>
	  </div>
	  <div class="">
	  	    <label for="pas">密码：</label>
	        <input type="text"  id="pas"/>
	  </div>
	   <input type="button" v-on:click="btn" value="登录" />
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				
			}
		},
		methods:{
			btn:function(){
				sessionStorage.setItem("accessToken","登录");
				this.$router.push({ path: '/' })
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	  .login{
	  	width: 100px;
	  	margin: 0 auto;
	  }
</style>