<template>
  <div>
    <h1>作用域插槽</h1>
    <h2>效果一：显示TODO列表时，已完成的TODO为绿色</h2>
    <List :todos="todos">
      <!-- 子组件决定不了结构与外观，需要父组件处理 -->
      <template v-slot="{ todo }">
        <h1 :style="{ color: todo.isComplete ? 'green' : 'red' }">
          {{ todo.text }}
        </h1>
      </template>
    </List>
    <h2>效果二：显示TODO列表时，带序号，TODO的颜色为蓝绿搭配</h2>
    <List :todos="todos">
      <!-- 子组件决定不了结构与外观，需要父组件处理 -->
      <template scope="{ todo, index }">
        <h1 :style="{ color: todo.isComplete ? 'red' : 'purple' }">
          {{ index }}---{{ todo.text }}
        </h1>
      </template>
    </List>
    <h2>效果三：显示TODO列表</h2>
    <List :todos="todos">
      <!-- 子组件决定不了结构与外观，需要父组件处理 -->
      <template slot-scope="{ todo, index }">
        <h1 :style="{ color: todo.isComplete ? 'red' : 'purple' }">
          {{ index }}---{{ todo.text }}
        </h1>
      </template>
    </List>
  </div>
</template>

<script type="text/ecmascript-6">
import List from "./List";
export default {
  name: "ScopeSlotTest",
  data() {
    return {
      todos: [
        { id: 1, text: "AAA", isComplete: false },
        { id: 2, text: "BBB", isComplete: true },
        { id: 3, text: "CCC", isComplete: false },
        { id: 4, text: "DDD", isComplete: false },
      ],
    };
  },

  components: {
    List,
  },
};
</script>
