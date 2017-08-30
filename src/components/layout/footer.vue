<template>
  <div id="fixed_footer">
   <!-- 首页 -->
   <router-link id="f_footer_1" @click="selectStyle (item) " class="active" to="/">
     <i class="iconfont">&#xe61c;</i>
     首页
   </router-link>

   <!-- 分类 -->
   <router-link id="f_footer_2" @click="selectStyle (item) " class="active" to="/classify">
     <i class="iconfont">&#xe64e;</i>
     分类
   </router-link>

   <!-- 搜索 -->
   <router-link id="f_footer_3" @click="selectStyle (item) " class="active" to="/search">
     <i class="iconfont">&#xe65a;</i>
     搜索
   </router-link>

   <!-- 我的 -->
   <router-link id="f_footer_4" @click="selectStyle (item) " class="active" to="/user">
     <i class="iconfont">&#xe6f8;</i>
     我的
   </router-link>
 </div>
</template>


<script>
  import Vue from 'vue'
	export default {
    data(){
　　　return {
      // active: false
　　　}
  　},
    methods:{
      selectStyle (item) {
        console.log("ok");
　　　　　this.$nextTick(function () {
　　　　　　this.items.forEach(function (item) {
            // Vue.set(item,'active',false);
　　　　　　});
            // Vue.set(item,'active',true);
　　　   });
      }
    }
  }

</script>

<style scoped>
  @import  "../../../static/css/footer.css";
</style>
