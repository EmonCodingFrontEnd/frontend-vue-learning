<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :disabled="!isShowTable" />
    </el-card>
    <el-card>
      <div v-show="isShowTable">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addAttr"
          >添加属性</el-button
        >
        <el-table style="width: 100%" border :data="attrList">
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="attrName" label="属性名称" width="150px">
          </el-table-column>
          <el-table-column label="属性值列表">
            <template slot-scope="{ row }">
              <el-tag
                style="margin: 0px 5px"
                type="success"
                v-for="attrValue in row.attrValueList"
                :key="attrValue.id"
                >{{ attrValue.valueName }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150px">
            <template slot-scope="{ row }">
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                @click="updateAttr(row)"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 添加属性|修改属性的结构 -->
      <div v-show="!isShowTable">
        <el-form :inline="true" ref="form" label-width="80px" :model="attrInfo">
          <el-form-item label="属性名">
            <el-input
              placeholder="请输入属性名"
              v-model.trim="attrInfo.attrName"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="addAttrValue"
          :disabled="!attrInfo.attrName.length"
          >添加属性值</el-button
        >
        <el-button @click="isShowTable = true">取消</el-button>
        <el-table
          style="width: 100%; margin: 20px 0px"
          border
          :data="attrInfo.attrValueList"
        >
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          ></el-table-column>
          <el-table-column label="属性值名称">
            <template slot-scope="{ row, $index }">
              <!-- 这里的结构需要在span与input之间切换 -->
              <el-input
                :ref="$index"
                v-if="row.flag"
                v-model.trim="row.valueName"
                placeholder="请输入属性值名称"
                size="mini"
                @blur="toLook(row)"
                @keyup.native.enter="toLook(row)"
              ></el-input>
              <span
                v-else
                @click="toEdit(row, $index)"
                style="display: block"
                >{{ row.valueName }}</span
              >
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="{ row, $index }">
              <!-- 气泡确认框 -->
              <el-popconfirm
                :title="`确定删除${row.valueName}吗？`"
                @onConfirm="deleteAttrValue($index)"
              >
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  slot="reference"
                ></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          :disabled="!attrInfo.attrValueList.length"
          @click="addOrUpdateAttr"
          >保存</el-button
        >
        <el-button @click="isShowTable = true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
// 按需引入lodash当中的深拷贝
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "Attr",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      // 接收平台属性的字段
      attrList: [],
      // 是否显示属性表格
      isShowTable: true,
      // 收集新增属性|修改属性使用的
      attrInfo: {
        attrName: "", // 属性名
        // 属性值，因为属性值可以有多个因此用数组，每一个属性值都是一个对象需要attrId和valueName
        attrValueList: [
          // {
          //   attrId: undefined, // 相应的属性名的id
          //   valueName: "",
          // },
        ],
        categoryId: undefined, // 三级分类的id
        categoryLevel: 3, // 分类的级别，因为服务器也需要区分几级id
      },
    };
  },
  methods: {
    getCategoryId({ categoryId, level }) {
      switch (level) {
        case 1:
          this.category1Id = categoryId;
          this.category2Id = "";
          this.category3Id = "";
          break;
        case 2:
          this.category2Id = categoryId;
          this.category3Id = "";
          break;
        case 3:
          this.category3Id = categoryId;
          this.getAttrList();
          break;
      }
    },
    // 获取平台品牌属性
    async getAttrList() {
      const { category1Id, category2Id, category3Id } = this;
      const result = await this.$API.attr.reqAttrList({
        category1Id,
        category2Id,
        category3Id,
      });
      if (result.code === 200) {
        this.attrList = result.data;
      }
    },
    // 添加属性按钮的回调
    addAttr() {
      this.isShowTable = false;
      this.attrInfo = {
        attrName: "",
        attrValueList: [],
        categoryId: this.category3Id,
        categoryLevel: 3,
      };
    },
    // 修改属性
    updateAttr(row) {
      this.isShowTable = false;
      // 由于数据结构当中存在对象里面嵌套数组，数组里面嵌套对象，因此需要使用深度的拷贝
      this.attrInfo = cloneDeep(row);
      this.attrInfo.attrValueList.forEach((e) => {
        // 确保数组元素对象的新属性也是响应式的，必须用$set
        this.$set(e, "flag", false);
      });
    },
    // 添加属性值
    addAttrValue() {
      // 向属性值数组里面添加元素
      this.attrInfo.attrValueList.push({
        attrId: this.attrInfo.id,
        valueName: "",
        flag: true, // 给每一个属性值添加一个标记flag，用于切换查看模式与编辑模式。
      });
      // 让新生成的input自动聚焦
      this.$nextTick(() => {
        this.$refs[this.attrInfo.attrValueList.length - 1].focus();
      });
    },
    // 属性值失去焦点事件
    toLook(row) {
      if (!row.valueName) {
        return this.$message("属性值不允许为空！");
      }
      const existDuplicate = this.attrInfo.attrValueList
        .filter((e) => e != row)
        .find((e) => e.valueName === row.valueName);
      if (existDuplicate) {
        return this.$message("同名属性值已存在！");
      }
      row.flag = false;
    },
    // 属性值获取焦点事件
    toEdit(row, $index) {
      row.flag = true;
      // 获取input节点，实现自动聚焦；需要注意：点击span时input尚未生成
      this.$nextTick(() => {
        this.$refs[$index].focus();
      });
    },
    // 气泡确认框点击确定时的回调
    deleteAttrValue(index) {
      this.attrInfo.attrValueList.splice(index, 1);
    },
    // 保存或更新属性
    async addOrUpdateAttr() {
      /**
       * 整理参数
       * 1-如果用户添加了很多属性值，但属性值为空，则不应该提交给服务器。
       * 2-提交给服务器的字段，不应该包含flag字段
       *
       */
      this.attrInfo.attrValueList = this.attrInfo.attrValueList.filter((e) => {
        if (!!e.valueName) {
          delete e.flag;
          return true;
        }
        return false;
      });

      try {
        await this.$API.attr.reqAddOrUpdateAttr(this.attrInfo);
        // 展示平台属性
        this.isShowTable = true;
        this.$message({ type: "success", message: "保存成功！" });
        // 保存成功后，需要刷新平台属性
        this.getAttrList();
      } catch (error) {
        this.$message.error(error.message);
      }
    },
  },
};
</script>

<style scoped>
</style>