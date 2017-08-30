<template  style="margin:0 auto">
  <div class="">
    <!-- 头部开始 -->
  	<div id="heading" class="fixed">
  		<!-- 设置logo -->
  		<div class="fl header-logo">
  			<router-link to="/">
          <img src="../../static/images/login.jpg" alt="">
  			</router-link>
  		</div>

      <!-- 注册按钮 -->
      <div class="header-reg">
        还没有账号？&nbsp;<br>
        <a href="#">立即注册</a>
      </div>
  	</div>

    <!-- 页面内容 -->
    <div class="box main">
      <div class="box-1000">
        <!-- 登录框 -->
        <div class="regBox clearfix">
          <div class="login-box">
            <div class="fl logintitle" style="font-size:13px;">
              我图账号登录
            </div>

            <div class="go-reg">
              还没有账号？
              <a href="#">立即注册</a>
            </div>

            <!-- 用户名输入框 -->
            <div class="login-wrap">
              <input class="login-input" type="text" autocomplete="off" placeholder="用户名">
            </div>

            <!-- 密码输入框 -->
            <div class="login-wrap">
              <input class="login-input" type="password" autocomplete="off" placeholder="密码">
            </div>

            <!-- 记住登录状态和忘记密码 -->
            <div class="login-wrap" style="margin-top:16px;margin-bottom:20px;overflow: hidden;height:20px;">
              <!-- 记住登录状态 -->
              <span class="fl">
                <input type="checkbox"> 记住登录状态
              </span>

              <!-- 忘记密码 -->
              <span class="fr">
                <a class="color_green" href="#">忘记密码</a>
              </span>
            </div>

            <div style="clear:both;"></div>

            <!-- 登录按钮 -->
            <div class="login-wrap">
              <input class="login-btn" type="button" value="登    录">
            </div>
          </div>
        </div>

        <!-- 其他账号登录 -->
        <div class="fieldset">
          <!-- 其他账号分割线 -->
          <fieldset class="qita-login-line">
            <legend style="color: #5f5f5f">其他账号登录</legend>
          </fieldset>
        </div>

        <!-- 其他登录图标 -->
        <div class="qita-login">
  				<!-- 微信图标 -->
  				<a class="wx" href="#">
  					<i></i>
  				</a>
  				<!-- 新浪图标 -->
  				<a class="sina" href="#">
  					<i></i>
  				</a>
  				<!-- 手机快捷图标 -->
  				<a class="ooopicqy" href="#">
  					<i></i>
  				</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  @import  "../../static/css/user.css";
</style>
