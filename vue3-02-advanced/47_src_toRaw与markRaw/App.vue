<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age += 1">修改年龄</button>
		<hr>
		<h2>{{ car }}</h2>
		<button @click="car.price += 10">点我价格+10</button>
	</div>
</template>

<!-- 
  toRaw 与 markRaw
  toRaw:
     作用：将一个由reactive生成的响应式对象，转换为普通对象。
     使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
  markRaw：
   作用：标记一个对象，使其永远不会再称为响应式对象。
   应用场景：
     1、有些值不应该被设置为响应式的，例如复杂的第三方类库等。
     2、当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
 -->
<script setup lang='ts'>
import { reactive, toRaw, markRaw, isRef, isReactive, isReadonly } from "vue";

let person = reactive({
	name: 'tony',
	age: 18
})
console.log(`output->响应式数据`, person)
console.log(`output->原始数据`, toRaw(person))

let car = markRaw({ brand: '奔驰', price: 100 })
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