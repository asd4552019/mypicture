<template>
	<div class="">

  	<!-- 头部开始 -->
	<header id="header" class="fixed">
		<!-- 设置logo -->
		<div class="logo">
			<a href="#">
				<i class="iconfont icon-wt">&#xe600;</i>
			</a>
		</div>

		<!-- 设置搜索框 -->
		<div class="head-search" style="margin-left:95px;margin-right:20px;">
			<form>
				<input class="txt" type="text" placeholder="请输入标题、关键词搜索" >
				<span class="sea-icon">
					<i class="iconfont icon-search">&#xe660;</i>
				</span>
			</form>
		</div>
	</header>
  	<!-- 头部结束 -->

	<!-- 设置轮播 -->
	<div id="banner">
		<div id="focus" class="swiper-container">
			<!-- 公共组件区 -->
		    <div class="swiper-wrapper">
		    	<!-- 一个slide 就是一屏-->
		        <div class="swiper-slide">
		        	<a class="swiper-img" href="#">
		        		<img src="../../static/images/l1.jpg" alt="">
		        	</a>
		        </div>
		        <div class="swiper-slide">
		        	<a class="swiper-img" href="#">
		        		<img src="../../static/images/l2.jpg" alt="">
		        	</a>
		        </div>
		        <div class="swiper-slide">
		        	<a class="swiper-img" href="#">
		        		<img src="../../static/images/l3.jpg" alt="">
		        	</a>
		        </div>
		    </div>

		    <!-- 如果需要分页器 -->
	    	<div id="banner-pagination" class="swiper-pagination swiper-pagination-bullets">
	    		<span class="swiper-pagination-bullet"></span>
	    		<span class="swiper-pagination-bullet"></span>
	    		<span class="swiper-pagination-bullet"></span>
	    		<span class="swiper-pagination-bullet"></span>
	    	</div>
		</div>
	</div>
	<!-- 轮播结束 -->


	<!-- 页面主要内容 -->
	<div class="item" v-for="(item,index) in msg" :key="index">
		<!-- 内容标题 -->
		<h3>
			{{item.title}}
			<!-- 数量 -->
			<span>{{item.count}}</span>
		</h3>

		<!-- 内容图片 -->
		<div class="item-m clearfix">
			<div class="list">
				<a href="#">
					<img v-bind:src="item.img1" alt="">
					<!-- 图片描述 -->
					<p>{{item.name1}}</p>
				</a>

			</div>

			<div class="list">
				<a href="#">
					<img v-bind:src="item.img2" alt="">
					<!-- 图片描述 -->
					<p>{{item.name2}}</p>
				</a>

			</div>

			<div class="list">
				<a href="#">
					<img v-bind:src="item.img3" alt="">
					<!-- 图片描述 -->
					<p>{{item.name3}}</p>
				</a>

			</div>

			<div class="list">
				<a href="#">
					<img v-bind:src="item.img4" alt="">
					<!-- 图片描述 -->
					<p>{{item.name4}}</p>
				</a>

			</div>
		</div>
	</div>
	<!-- 页面主要内容结束 -->







	<!-- 设置电脑版与移动端切换 -->
	<div class="port">
		<!-- 电脑版 -->
		<a href="http://ooopic.com/?sign=PC" class="on" style="width:49%">电脑版</a>

		<!-- 手机端 -->
		<a href="http://m.ooopic.com/" class="fr" style="width:49%;color:#8f8f8f">手机端</a>
	</div>

	<!-- 设置返回顶部的锚点 -->
	<div id="gotop">
		<a href="#top">
			<i class="iconfont">&#xe603;</i>
		</a>
	</div>


</div>
</template>

<script>
// 在这儿引入
import mySwiper from "../../static/js/swiper.min.js"
export default {
  data () {
    return {
      msg: null
    }
  },
	mounted:function () {
			// console.log(this.$http)
			this.$http.get("http://localhost:8080/user/info").then(function(rel){
				 this.msg=rel.body.data;
				//  console.log(this.msg);
			})

      // console.log("执行了吗");
			var mySwiper = new Swiper ('.swiper-container', {
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				autoplay: 3000,
				speed:1000,
				autoplayDisableOnInteraction:false, //用户滑动之后,继续轮播
			})
    }

}
</script>

<style scoped>
  @import  "../../static/css/defaul.css";
</style>
