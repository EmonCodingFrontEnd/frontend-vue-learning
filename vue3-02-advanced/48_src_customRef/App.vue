<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<!-- 
	customRef：
		作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行逻辑控制。
 -->
<script setup lang='ts'>
import { ref } from "vue";
import useMsgRef from "@/hooks/useMsgRef";

// 使用Vue提供的默认ref定义响应式数据，数据一变，数据就刷新！
// let msg = ref('你好');

// 使用Vue提供的customRef定义响应式数据，具有延迟效果。
let initValue = '你好';
let msg = useMsgRef(initValue, 2000);

</script>
	
<style lang="css" scoped>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}

button {
	margin-right: 5px;
}
</style>