<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">
          {{ item.title }}
        </router-link> -->

        <!-- 跳转路由并携带params参数，to的对象写法【推荐】 -->
        <router-link
            :to="{
            name: 'xiangqing', // 使用params时无法使用path参数
            params: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: "001", title: "消息001"},
        {id: "002", title: "消息002"},
        {id: "003", title: "消息003"},
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "xiangqing", // 使用params时无法使用path参数
        params: {
          id: item.id,
          title: item.title,
        },
      });

      // router.push 只能当前窗口打开
      // router.resolve 结合 window.open 可以新窗口打开
      // let routerUrl = this.$router.resolve({
      //   path: "xiangqing",
      //   params: {
      //     id: item.id,
      //     title: item.title,
      //   },
      // })
      // window.open(routerUrl.href, "_blank");
    },
    replaceShow() {
      this.$router.replace({
        name: "xiangqing", // 使用params时无法使用path参数
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
  mounted() {
    console.log("Message组件挂载完毕了");
  },
  beforeDestroy() {
    console.log("Message组件即将被销毁");
  },
};
</script>

<style>
</style>