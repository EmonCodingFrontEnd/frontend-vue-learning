// 定义组合式API仓库
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { nanoid } from "nanoid";

const useTodoStore = defineStore('todo', function () {
  let todos = ref([{ id: 1, title: '吃饭' }, { id: 2, title: '睡觉' }, { id: 3, title: '打豆豆' }])
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 等同于actions
  function updateTodo() {
    todos.value.push({ id: nanoid(), title: '打豆豆' });
  }

  // 等同于getters
  const total = computed(() => { return arr.reduce((pre, cur) => pre + cur, 0) })

  // 务必要返回一个对象：属性与方法可以提供给组件使用
  return { todos, updateTodo, total }
});

export default useTodoStore;