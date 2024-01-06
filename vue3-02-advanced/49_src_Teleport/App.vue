<template>
	<div class="outer">
		<h2>我是App组件</h2>
		<img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
		<br>
		<Modal />
	</div>
</template>
  
<script setup lang='ts' name="App">
/**
 * 什么是Teleport？——Teleport是一种能够将我们组件html结构移动到指定位置的技术。
 */
import Modal from './Modal.vue'

</script>

<style lang="css" scoped>
.outer {
	background-color: #ddd;
	border-radius: 10px;
	padding: 5px;
	box-shadow: 0 0 10px;
	width: 400px;
	height: 400px;
	/* 可以导致Modal不再参考视口定位，而是参考当前组件定位；为Modal组件增加Teleport可以解决！！！ */
	filter: saturate(100%);
}

img {
	width: 270px;
}
</style>