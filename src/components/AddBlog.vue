<template>
	<div id="add-blog">
       <h1>添加博客</h1>
       <form v-if="!submmited">
       	<label for="Blog_Title">博客标题</label>
       	<input type="text" value="" id="Blog_Title" v-model="blog.title" required/>
       	<label for="Blog_Content">博客标题</label>
       	<textarea v-model="blog.content"></textarea>
       	
       	<!--fenlei-->
       	<div class="checkboxes">
       		<label>Vue.js</label>
       		<input type="checkbox"  value="Vue.js" v-model="blog.categories"/>
       		<label>Node.js</label>
       		<input type="checkbox"  value="Node.js" v-model="blog.categories"/>
       		<label>React.js</label>
       		<input type="checkbox"  value="React.js" v-model="blog.categories"/>
       		<label>Anjular.js</label>
       		<input type="checkbox"  value="Anjular.js" v-model="blog.categories"/>
       	</div>
       	
       	<label>作者：</label>
       	<select v-model="blog.author">
       		<option v-for="author in authors" :key="author">{{author}}</option>
       	</select>
        <button type="button" v-on:click="postss">点击提交</button>    	      	
       </form>
       <hr /> 
       <div v-if="
       	submmited">
       	  <h2>您的博客发布成功</h2>
       </div>
       <div id="preview">
       		<h3>博客总览</h3>
       		<p>博客标题：{{blog.title}}</p>
       		<p>博客内容：</p>
       		<p>{{blog.content}}</p>
       		<ul>
       			<li v-for="categorie in blog.categories" :key="categorie">
       				{{categorie}}
       			</li>
       		</ul>
       		<p>作者：{{blog.author}}</p>
       	</div>
       
       
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		//http://jsonplaceholder.typicode.com/
		//http://jsonplaceholder.typicode.com/posts
		name: 'add-blog',
		data() {
			return {
				blog:{
					content:"",
					title:"",
					categories:[ ],
					aurhor:""
				},
				authors:["马遥","赵丹丹","马丹"],
				submmited:false
			}
		},
		methods:{
			postss:function(){
//				this.$http.post("http://jsonplaceholder.typicode.com/posts",{
//					title:this.blog.title,
//					body:this.blog.content,
//					userId:1
//					
//				}) .then(function(data){
//				        this.submmited=true
//					
//				})
                    
                 this.$http.post("https://wd2634800982erlgza.wilddogio.com/posts.json",{
                 	content:this.blog.content,
                 	title:this.blog.title,
                 	author:this.blog.author,
                 	categories:this.blog.categories
                 })
				         .then(function(data){
				         console.log(data);
				        this.submmited=true
					
				})
	}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
	box-sizing: border-box;
}
#add-blog{
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}
label{
	display: block;
	margin: 20px 0px 10px;
}
input[type="text"],textarea,select{
	width:100%;
	display: block;
	padding: 5px;
}
.checkboxes label{
	display: inline-block;
	margin-top: 0;	
}
.checkboxes input{
	display: inline-block;
	margin-left: 10px;	
}
button{
	display: block;
	margin: 20px 0;
	background: crimson;
	color: white;
	border: 0;
	padding: 10px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
}
#preview{
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3{
	margin-top: 10px;
}
textarea{
	height: 200px;
}

</style>