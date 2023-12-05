<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <!-- 声明式导航：务必要有to属性 -->
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 搜索按钮的回调函数：需要向search路由进行跳转
    goSearch() {
      // 路由传递参数：第一种：字符串形式
      // this.$router.push(
      //   "/search/" + this.keyword + "?k=" + this.keyword.toUpperCase()
      // );
      // 路由传递参数：第二种：模板字符串形式
      // this.$router.push(
      //   `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
      // );
      // 路由传递参数：第三种：对象【推荐】
      const to = { name: "search", params: { keyword: this.keyword } };
      if (this.$route.query) {
        to.query = this.$route.query;
      }
      this.$router.push(to);
      // ==================================================
      /**
       * 1、路由传递参数（对象写法）path是否可以结合params参数一起使用？
       * 不能，会报错！
       */
      // this.$router.push({
      //   path: "/search", // path不要与params联合使用，会出错
      //   params: {
      //     keyword: this.keyword,
      //   },
      //   query: { k: this.keyword.toUpperCase() },
      // });
      /**
       * 2、如何指定params参数可传可不传？
       * 如果路由要求传递params参数，但是你就不传递params参数，发现一件事情：URL会有问题。
       * 如何指定params参数可传递、或者不传递？在配置路由的时候，在占位的后面加上一个问号【params可以传递或者不传递】
       */
      // this.$router.push({
      //   name: "search",
      //   query: { k: this.keyword.toUpperCase() },
      // });
      /**
       * 3、params参数可以传递也可以不传递，但是如果传递的是空串，该如何解决？
       * 使用undefined解决：params参数可以传递、不传递（空的字符串）
       */
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: "" || undefined },
      //   query: { k: this.keyword.toUpperCase() },
      // });
      /**
       * 4、路由组件能不能传递props数据？
       * 可以
       */
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword },
      //   query: { k: this.keyword.toUpperCase() },
      // });
      /**
       * 编程式路由跳转到当前路由（参数不变），多次执行会抛出 “Uncaught (in promise) NavigationDuplicated:” 异常
       * 路由跳转有两种形式：声明式导航、编程式导航
       * 声明式导航没有这类问题，因为vue-router底层已经处理好了。
       * 1.1、为什么编程式导航进行路由跳转的时候，就有这种警告错误呢？
       * "vue-router": "^3.6.5",最新的vue-router引入promise
       * 1.2、如何解决？
       * 通过给push方法传递相应的成功、失败回调函数，可以捕获到当前错误，可以解决。
       * 1.3、通过底部的代码，可以实现解决错误
       * this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});
       * 这种的写法，治标不治本。将来在别的组件当中push|replace，编程式导航还是会有这样的问题。
       */
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword },
      //   query: { k: this.keyword.toUpperCase() },
      // });
    },
    // 退出登录
    logout() {
      try {
        this.$store.dispatch("userLogout");
        // 如果退出成功，回到首页
        this.$router.push("/home");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  computed: {
    userName() {
      return this.$store.state.user.userInfo?.name;
    },
  },
  mounted() {
    //清除关键字
    this.$bus.$on("clearKeyword", () => {
      this.keyword = "";
    });
  },
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>