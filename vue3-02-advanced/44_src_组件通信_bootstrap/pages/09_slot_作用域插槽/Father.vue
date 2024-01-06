<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <ul>
            <li v-for="y in params.youxi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot:other="{ x }">
          <span style="background-color: goldenrod;color:purple;">{{ x }}</span>
        </template>
        <template v-slot="{ youxi, x, y }">
          <ol>
            <li v-for="item in youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
          <div style="background-color:black;padding:5px 1px;color:white">
            <span>来自作用域插槽的属性：</span>
            <h3>x={{ x }}，y={{ y }}</h3>
          </div>
        </template>
      </Game>

      <Game>
        <template #default="{ youxi }">
          <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue'
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>