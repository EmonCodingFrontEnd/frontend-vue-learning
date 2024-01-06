<template>
	<div class="app">
		<h2>求和为：{{ sum }}</h2>
		<h2>名字为：{{ person.name }}</h2>
		<h2>年龄为：{{ person.age }}</h2>
		<h2>汽车为：{{ car }}</h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个人</button>
		<hr>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
		<button @click="changeCar">修改整个车</button>
	</div>
</template>

<!-- 
	通过使用shallowRef()和shallowReactive()来绕开深度响应。
	浅层式API创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，
	避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。
 -->
<script setup lang='ts'>
import { ref, shallowRef, reactive, shallowReactive } from "vue";

let sum = shallowRef(0);
let person = shallowRef({ name: '张三', age: 18 })
let car = shallowReactive({ brand: '奔驰', options: { color: '红色', engine: 'V8' } });

function changeSum() { sum.value += 1; };
function changeName() { person.value.name = '李四' }; // 无效
function changeAge() { person.value.age += 1; }; // 无效
function changePerson() { person.value = { name: 'tony', age: 100 } };

function changeBrand() { car.brand = '宝马'; };
function changeColor() { car.options.color = '紫色' }; // 无效
function changeEngine() { car.options.engine = 'V12'; }; // 无效
function changeCar() { Object.assign(car, { brand: '奔驰2', options: { color: '红色2', engine: 'V8.2' } }) };
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