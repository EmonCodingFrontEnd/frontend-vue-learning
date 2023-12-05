<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <!-- 商品分类导航 -->
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <Recommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层：家用电器-->
    <!--楼层：手机通讯-->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorList: (state) => {
        return state.home.floorList;
      },
    }),
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
};
</script>

<style scoped lang="less">
</style>