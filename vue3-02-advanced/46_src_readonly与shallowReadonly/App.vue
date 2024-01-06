<template>
	<div class="app">
		<h2>求和为：{{ sum1 }}</h2>
		<h2>求和为：{{ sum2 }}</h2>
		<h2>汽车为：{{ car1 }}</h2>
		<h2>汽车为：{{ car2 }}</h2>
		<button @click="changeSum1">sum1+1</button>
		<button @click="changeSum2">sum2+1</button>
		<button @click="changeBrand1">修改品牌(car1)</button>
		<button @click="changeColor1">修改颜色(car1)</button>
		<button @click="changePrice1">修改价格(car1)</button>
		<button @click="changeBrand2">修改品牌(car2)</button>
		<button @click="changeColor2">修改颜色(car2)</button>
		<button @click="changePrice2">修改价格(car2)</button>
	</div>
</template>

<!-- 
	readonly：
		作用：用于创建一个对象的深层次只读副本。
		特点：
			对象的所有嵌套属性都将变为只读。
			任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。
		应用场景：
			创建不可变的状态快照。
			保护全局状态或配置不被修改。
	shallowReadonly：
		作用：与readonly类似，但只作用于对象的顶层属性。
		特点：
			只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。
 -->
<script setup lang='ts'>
import { ref, reactive, readonly, shallowReadonly } from "vue";

let sum1 = ref(0);
let sum2 = readonly(sum1);
let car1 = reactive({ brand: '奔驰', options: { color: '红色', price: 100 } });
let car2 = shallowReadonly(car1);

function changeSum1() { sum1.value += 1; };
function changeSum2() { sum2.value += 1; }; // 无效

function changeBrand1() { car1.brand = '宝马'; };
function changeColor1() { car1.options.color = '绿色' };
function changePrice1() { car1.options.price += 10 };
function changeBrand2() { car2.brand = '宝马'; }; // 无效
function changeColor2() { car2.options.color = '绿色' }; // 若是readonly，这里也无效
function changePrice2() { car2.options.price += 10; }; // 若是readonly，这里也无效
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