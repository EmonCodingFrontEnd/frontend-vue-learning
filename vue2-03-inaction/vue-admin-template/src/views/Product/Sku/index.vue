<template>
  <div>
    <!-- 表格 -->
    <el-table border style="width: 100%" :data="skuInfoList">
      <el-table-column
        type="index"
        :index="(page - 1) * limit + 1"
        label="序号"
        width="80px"
      ></el-table-column>
      <el-table-column
        prop="skuName"
        label="名称"
        width="200"
      ></el-table-column>
      <el-table-column prop="skuDesc" label="描述" width=""></el-table-column>
      <el-table-column label="默认图片" width="120px">
        <template slot-scope="{ row }">
          <img :src="row.skuDefaultImg" style="width: 100px" />
        </template>
      </el-table-column>
      <el-table-column
        prop="weight"
        label="重量（KG）"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="price"
        label="价格（元）"
        width="100"
      ></el-table-column>
      <el-table-column label="操作" width="230">
        <template slot-scope="{ row }">
          <el-button
            v-if="row.isSale === 0"
            type="success"
            icon="el-icon-bottom"
            size="mini"
            title="当前状态是下架状态，点击上架！"
            @click="sale(row)"
          ></el-button>
          <el-button
            v-else
            type="success"
            icon="el-icon-top"
            size="mini"
            title="当前状态是上架状态，点击下架！"
            @click="cancel(row)"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="edit(row)"
          ></el-button>
          <el-button
            type="info"
            icon="el-icon-info"
            size="mini"
            @click="getSkuInfo(row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="del(row)"
          ></el-button>
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
    ></el-pagination>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :show-close="false"
      size="50%"
    >
      <el-row>
        <el-col :span="5">名称</el-col>
        <el-col :span="16">{{ skuInfoDetail.skuName }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">描述</el-col>
        <el-col :span="16">{{ skuInfoDetail.skuDesc }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">价格</el-col>
        <el-col :span="16">{{ skuInfoDetail.price }}元</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">平台属性</el-col>
        <el-col :span="16">
          <el-tag
            type="success"
            v-for="attr in skuInfoDetail.skuAttrValueList"
            :key="attr.id"
            style="margin-right: 10px"
          >
            {{ attr.attrId }}-{{ attr.valueId }}
          </el-tag>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">商品图片</el-col>
        <el-col :span="16">
          <el-carousel height="550px" :autoplay="false" style="width: 550px">
            <el-carousel-item
              v-for="skuImage in skuInfoDetail.skuImageList"
              :key="skuImage.id"
            >
              <img :src="skuImage.imgUrl" style="height: 550px" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Sku",
  data() {
    return {
      page: 1,
      limit: 3,
      total: 100,
      skuInfoList: [],
      skuInfoDetail: {},
      drawer: false, // 抽屉是否显示
      direction: "rtl", // 抽屉打开的方向
    };
  },
  methods: {
    // 获取Sku列表的方法
    async getSkuList() {
      const { page, limit } = this;
      const result = await this.$API.sku.reqSkuList(page, limit);
      if (result.code === 200) {
        this.skuInfoList = result.data.records;
        this.total = result.data.total;
      }
    },
    // 修改分页器的页面尺寸的回调
    handleSizeChange(limit) {
      this.page = 1;
      this.limit = limit;
      this.getSkuList();
    },
    // 点击分页器的第几页按钮的回调
    handleCurrentChange(page) {
      this.page = page;
      this.getSkuList();
    },
    // 上架
    async sale(sku) {
      const result = await this.$API.sku.reqOnSale(sku.id);
      if (result.code === 200) {
        this.getSkuList();
        this.$message({ type: "success", message: "上架成功！" });
      }
    },
    // 下架
    async cancel(sku) {
      const result = await this.$API.sku.reqCancelSale(sku.id);
      if (result.code === 200) {
        this.getSkuList();
        this.$message({ type: "success", message: "下架成功！" });
      }
    },
    // 编辑
    async edit(sku) {
      // const result = await this.$API.sku.reqOnSale(sku.id);
      // if (result.code === 200) {
      // this.getSkuList();
      this.$message({ type: "success", message: "敬请期待！" });
      // }
    },
    // 查看
    async getSkuInfo(sku) {
      const result = await this.$API.sku.reqSkuInfoById(sku.id);
      if (result.code === 200) {
        this.skuInfoDetail = result.data;
        this.drawer = true;
      }
    },
    // 删除
    async del(sku) {
      // const result = await this.$API.sku.reqOnSale(sku.id);
      // if (result.code === 200) {
      // this.getSkuList();
      this.$message({ type: "success", message: "敬请期待！" });
      // }
    },
  },
  mounted() {
    this.getSkuList();
  },
};
</script>

<style>
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>

<style scoped>
.el-row .el-col-5 {
  font-size: 18px;
  text-align: right;
}
.el-col {
  margin: 10px 10px;
}
/* 
  深度选择器，在父组件scoped情况下，可以横跨子组件传递样式
  >>>       原生CSS深度选择器
  /deep/    less
  ::v-deep  scss
*/
>>> .el-carousel__button {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
}
</style>