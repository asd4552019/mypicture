<template>
  <div>
    <!-- 头部开始 -->
  	<header id="header" class="fixed">
      <!-- 设置返回按钮 -->
      <div class="goback">
        <a href="/">
          <i class="iconfont">&#xe69f;</i>
        </a>
      </div>

      <!-- 全部分类 -->
      <div class="header-title">全部分类</div>
  	</header>

    <!-- 分类列表 -->
    <div class="classify-con" style="margin-top:50px;margin-bottom:65px;">
      <ul class="classify-list">
        <!-- 背景墙|装饰画 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont bg_wall">&#xe61b;</i>
              <em>背景墙|装饰画</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- 平面|广告设计 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont design">&#xe625;</i>
              <em>平面|广告设计</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- PPT模板 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont ppt">&#xe9ca;</i>
              <em>PPT模板</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- 视频素材 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont video">&#xe501;</i>
              <em>视频素材</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- 淘宝素材 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont tao">&#xe65e;</i>
              <em>淘宝素材</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- 图标|UI设计 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont ui">&#xe601;</i>
              <em>图标|UI设计</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- 手抄报|小报 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont model">&#xe629;</i>
              <em>手抄报|小报</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>

        <!-- CAD图库 -->
        <li class="list">
          <div class="list-con">
            <!-- 类别名字 -->
            <div class="list-left fl">
              <i class="iconfont cad">&#xe60a;</i>
              <em>CAD图库</em>
            </div>

            <!-- 右边箭头 -->
            <div class="list-right fr">
              <!-- 未展开详细分类的箭头样式 -->
              <i class="iconfont arrow" style="display: inline;">&#xe503;</i>
              <!-- 展开详细分类的箭头样式 -->
              <i class="iconfont arrow-current" style="display:none">&#xe502;</i>
            </div>
          </div>
        </li>
      </ul>
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
  export default {

  }
</script>

<style scoped>
  @import  "../../static/css/classify.css";
</style>
