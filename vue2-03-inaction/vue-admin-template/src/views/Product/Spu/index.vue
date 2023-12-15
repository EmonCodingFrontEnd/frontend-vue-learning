<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :disabled="scene !== 0" />
    </el-card>
    <el-card>
      <!-- 展示Spu列表的结构 -->
      <div v-show="scene === 0">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addSpu"
          >添加Spu</el-button
        >
        <el-table style="width: 100%" border :data="spuList">
          <el-table-column
            type="index"
            :index="(page - 1) * limit + 1"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="spuName" label="Spu名称"> </el-table-column>
          <el-table-column prop="description" label="Spu描述">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="{ row, $index }">
              <HintButton
                title="添加Sku"
                type="success"
                icon="el-icon-plus"
                size="mini"
                @click="addSku(row)"
              ></HintButton>
              <HintButton
                title="修改Spu"
                type="warning"
                icon="el-icon-edit"
                size="mini"
                @click="updateSpu(row)"
              ></HintButton>
              <HintButton
                title="查看当前Spu全部Sku列表"
                type="info"
                icon="el-icon-info"
                size="mini"
              ></HintButton>
              <!-- 气泡确认框 -->
              <el-popconfirm
                :title="`确定删除${row.spuName}吗？`"
                @onConfirm="deleteSpu(row)"
              >
                <HintButton
                  title="删除Spu"
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  slot="reference"
                ></HintButton
              ></el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="margin-top: 20px; text-align: center"
          :current-page="page"
          :page-size="limit"
          :pager-count="5"
          :total="total"
          :page-sizes="[3, 5, 10]"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next, jumper, ->, sizes, total"
        >
        </el-pagination>
      </div>
      <SpuForm
        v-show="scene === 1"
        @changeScene="changeScene"
        ref="spu"
      ></SpuForm>
      <SkuForm v-show="scene === 2"></SkuForm>
    </el-card>
  </div>
</template>

<script>
import SpuForm from "@/views/Product/Spu/SpuForm";
import SkuForm from "@/views/Product/Spu/SkuForm";

export default {
  name: "Spu",
  components: { SpuForm, SkuForm },
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      page: 1,
      limit: 3,
      total: 0,
      // 列表展示的数据
      spuList: [],
      scene: 0, // 0-展示Spu列表；1-添加Spu|修改Spu；2-添加Sku
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
          this.getSpuList();
          break;
      }
    },
    // 获取平台Spu列表数据
    async getSpuList() {
      const { page, limit, category3Id } = this;
      const result = await this.$API.spu.reqSpuList({
        page,
        limit,
        category3Id,
      });
      if (result.code === 200) {
        this.total = result.data.total;
        this.spuList = result.data.records;
      }
    },
    // 修改分页器的页面尺寸的回调
    handleSizeChange(limit) {
      this.page = 1;
      this.limit = limit;
      this.getSpuList();
    },
    // 点击分页器的第几页按钮的回调
    handleCurrentChange(page) {
      this.page = page;
      this.getSpuList();
    },
    // 添加Spu的回调
    addSpu() {
      this.scene = 1;
      const { category3Id } = this;
      this.initSpuData({ category3Id });
    },
    // 添加Sku
    addSku() {
      this.scene = 2;
    },
    // 修改Spu的回调
    updateSpu(row) {
      this.scene = 1;
      this.initSpuData(row);
    },
    // 查看Spu的全部Sku信息

    // 删除Spu
    async deleteSpu(row) {
      const result = await this.$API.spu.reqDeleteSpu(row.id);
      if (result.code === 200) {
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.page = 1;
        this.getSpuList();
      }
    },
    initSpuData(row) {
      /**
       * 如何初始化子组件数据？
       * 如果使用v-if来控制子组件显示隐藏，则在子组件的mounted初始化数据！
       * 如果使用v-show来控制子组件显示隐藏，则通过ref来获取子组件并初始化数据！
       */
      this.$refs.spu.initSpuData(row);
    },
    // 自定义事件回调（SpuForm）
    changeScene({ scene, isAdd }) {
      this.scene = scene;
      // 修改场景的情况：也有可能是添加Spu或者修改Spu成功后触发的
      if (isAdd) {
        // 如果是添加，获取第一页数据
        this.page = 1;
      }
      this.getSpuList();
    },
  },
};
</script>

<style scoped>
</style>