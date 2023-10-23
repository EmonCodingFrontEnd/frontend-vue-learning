<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{ games }">
        <ul>
          <li v-for="(item, idx) in games" :key="idx">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="atguigu">
        <ol>
          <li
            style="color: red"
            v-for="(item, idx) in atguigu.games"
            :key="idx"
          >
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="atguigu">
        <h4 v-for="(item, idx) in atguigu.games" :key="idx">
          {{ item }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>