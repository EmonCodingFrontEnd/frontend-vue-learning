<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      console.log(this);
      // 请求前更新List数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then(
          (res) => {
            console.log(res.data);
            // 请求成功后更新List数据
            this.$bus.$emit("updateListData", {
              isLoading: false,
              errMsg: "",
              users: res.data.items,
            });
          },
          (err) => {
            console.log(err.message);
            // 请求失败后更新List数据
            this.$bus.$emit("updateListData", {
              isLoading: false,
              errMsg: err.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
</style>