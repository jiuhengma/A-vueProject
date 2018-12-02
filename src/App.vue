<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="楚门的世界"></mt-header>
		



    <!-- 中间 -->
    <transition>
			<router-view></router-view>
		</transition>


    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">商城</span>
			</router-link>
      <router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mine">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>

    
  </div>
</template>

<script>

</script>

<style>
.mint-header.is-fixed{
	background-color: rgba(45, 89, 89, 0.7);
	font-size: 17px;
	font-weight: 800;
}

.mui-bar-tab{
	background-color: rgba(45, 89, 89, 1);
}

.app-container{
  padding-top: 40px;
	padding-bottom: 50px;
	overflow: hidden;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>


