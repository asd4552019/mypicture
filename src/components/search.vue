<template>
  <div class="search-fixed">
    <!-- 头部开始 -->
  	<header id="header" class="fixed">
      <!-- 设置返回按钮 -->
      <div class="goback">
        <a href="/">
          <i class="iconfont">&#xe69f;</i>
        </a>
      </div>

      <!-- 设置搜索框 -->
      <div id="head" class="head-search" style="margin-left:45px;">
        <form>
          <input class="txt" type="text" placeholder="请输入标题、关键词搜索" required v-model="show">
          <!-- 搜索图标 -->
          <span class="sea-icon">
            <i class="iconfont icon-search">&#xe660;</i>
          </span>
        </form>
      </div>

      <!-- 搜索的按钮 -->
      <div class="head-login">
        <a href="javascript:void(0);">搜索</a>
      </div>

  	</header>
    <!-- 头部结束 -->


    <!-- 热门搜索 -->
    <div id="search" style="margin-top:50px;">
      <div class="hot-search">
        <h3>热门搜索</h3>

        <!-- 设置搜索关键字 -->
        <transition-group enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
          <div class="hot-tags clearfix animated" v-for="(val,index) in lists" :key="index">
            <a href="#" target="_blank">{{val}}</a>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"app",
    data:function(){
      return{
        show:"",
  			list:["建军节","年中总结ppt","儿童房背景墙","抽象","毕业季","企业文化墙","logo视频","淘宝详情页"]
      }
		},
		computed:{
			lists:function(){

				var arr=[];

				this.list.forEach(function(val){

					if(val.indexOf(this.show)!=-1){
						arr.push(val);
					}
					// 强制改变this的指向
				}.bind(this))
				// console.log(arr);
				return arr;

			}
		}
  }
</script>

<style scoped>
  @import  "../../static/css/search.css";
</style>
