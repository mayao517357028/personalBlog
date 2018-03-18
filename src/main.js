// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import Router from "./routers"

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令(全局)
//Vue.directive("rainbow",{
//	  bind(el,binding,vnode){
//	  	  el.style.color="#"+Math.random().toString(16).slice(2,8)
//	  }
//})
//
//Vue.directive("theme",{
//	  bind(el,binding,vnode){
//	  	 if(binding.value=="wide"){
//	  	 	   el.style.maxWidth="1260px";
//	  	 }
//	  	 
//	  	 if(binding.arg=="colum"){
//	  	 	el.style.background="#6677cc";
//	  	 	el.style.padding="20px";
//	  	 }
//	  }
//})

//过滤器()全局
//Vue.filter("to-uppercase",function(value){
//	  return value.toUpperCase();
//})
//Vue.filter("snippet",function(value){
//	  return value.slice(0,50)+"...";
//})



//创建路由
const  router=new VueRouter({
	 routes:Router,
	 mode:"history"
})
 router.beforeEach((to, from, next) => {    
                        //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
                     if(to.path === '/login')  {  next()  }  // 如果即将进入登录路由，则直接放行
                     else {     //进入的不是登录路由
                          if(to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {next({ path: '/login' })} 
                          //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
                          else { next() }
                          }  //如果不需要登录验证，或者已经登录成功，则直接放行
           }       )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
