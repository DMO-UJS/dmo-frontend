<template>
	<div class="search" id="search">
		<form>
			<input type="text" placeholder="请输入查询请求" :class="'search-input' + (searchText==''?' search-input-empty':'')" v-model="searchText" @keyup.enter="search">
		</form>
    <div>
    	<!-- 治疗方案嵌套（后期可能出现多层嵌套，需要在js中实现） -->
      <article class="search-answer" id="search-answer">
      	<ul v-for='item in programs'>
      		<li>{{item.name}}</li>
      			<ul>
      				<li>{{item.content}}</li>
      			</ul>
      	</ul>
      </article>
    </div>
	</div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      searchText: '',
      searchAnswer: '',
      searchUrl: 'http://127.0.0.1:5000/test',
      programs: [],
    }
  },
  methods: {
  	// 请求服务器
    search: function () {

    	let message = {
    		text: this.searchText
    	}
      console.log(typeof message)
      this.$http.post(this.searchUrl, message)
         .then((response) => {
         		 console.log(response.data)
         			this.programs = response.data
         		
         }, (response) => {
         	// error
         })
    }, 	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
	margin: 2% auto;
	width: 500px;
}
.search-input {
	width: 500px;overflow: hidden; padding: 0 15px;font-size: 13px; border: 1px solid #EBEBEB;
	margin:0 auto 15px; height: 48px; line-height: 48px; box-sizing: border-box; -webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-ms-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
}

.search-input-empty {border: 1px solid #f37474 !important;}

.search-answer {
	font-size: 13px;
	text-align: left;
}

.ajaxTest {
	width: 100px;
	height: 50px;
	border: 3px solid #00fee5;
	color: red;
}
</style>