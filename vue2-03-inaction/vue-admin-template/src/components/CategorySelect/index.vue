<template>
  <div>
    <!-- 
      inline  代表的是行内表单，代表一行可以多个表单元素
     -->
    <el-form :inline="true" :model="cForm" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select
          placeholder="请选择"
          v-model="cForm.category1Id"
          @change="handler1"
          :disabled="disabled"
        >
          <el-option
            :label="c1.name"
            :value="c1.id"
            v-for="c1 in list1"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          placeholder="请选择"
          v-model="cForm.category2Id"
          @change="handler2"
          :disabled="disabled"
        >
          <el-option
            :label="c2.name"
            :value="c2.id"
            v-for="c2 in list2"
            :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          placeholder="请选择"
          v-model="cForm.category3Id"
          @change="handler3"
          :disabled="disabled"
        >
          <el-option
            :label="c3.name"
            :value="c3.id"
            v-for="c3 in list3"
            :key="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  props: ["disabled"],
  data() {
    return {
      // 一级分类数据
      list1: [],
      // 二级分类数据
      list2: [],
      // 三级分类数据
      list3: [],
      // 手机响应的一级二级三级分类的id
      cForm: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
      },
    };
  },
  methods: {
    // 获取一级分类数据
    async getCategory1List() {
      const result = await this.$API.attr.reqCategory1List();
      if (result.code === 200) {
        this.list1 = result.data;
      }
    },
    // 一级分类的选择事件触发
    async handler1() {
      const { category1Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category1Id, level: 1 });

      // 通过一级分类的id获取二级分类的数据
      const result = await this.$API.attr.reqCategory2List(category1Id);
      if (result.code === 200) {
        this.cForm.category2Id = "";
        this.cForm.category3Id = "";
        this.list2 = [];
        this.list3 = [];

        this.list2 = result.data;
      }
    },
    // 二级分类的选择事件触发
    async handler2() {
      const { category2Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category2Id, level: 2 });

      // 通过二级分类的id获取三级分类的数据
      const result = await this.$API.attr.reqCategory3List(category2Id);
      if (result.code === 200) {
        this.cForm.category3Id = "";
        this.list3 = [];

        this.list3 = result.data;
      }
    },
    // 三级分类的选择事件触发
    async handler3() {
      const { category3Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category3Id, level: 3 });
    },
  },
  // 组件挂在完毕：向服务器发送请求，获取响应的一级分类的数据
  mounted() {
    // 获取一级分类的数据的方法
    this.getCategory1List();
  },
};
</script>

<style>
</style>