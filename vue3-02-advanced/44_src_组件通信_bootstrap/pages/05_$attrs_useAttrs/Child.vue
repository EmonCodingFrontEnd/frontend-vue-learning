<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs" :x="x * 10" />
	</div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'

// 引入useAttrs方法：获取组件标签身上属性与事件
import { defineProps, useAttrs } from "vue";
let props = defineProps(["x"]); // 取走x，剩下的留给$attrs
console.log(props);

let attrs = useAttrs();
console.log(attrs);
</script>

<style scoped>
.child {
	margin-top: 20px;
	background-color: skyblue;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>