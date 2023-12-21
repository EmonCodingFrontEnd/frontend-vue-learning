<template>
  <div>
    <el-form ref="form" label-width="100px" :model="skuInfo">
      <el-form-item label="Spu名称"> {{ spuInfo.spuName }} </el-form-item>
      <el-form-item label="Sku名称">
        <el-input
          placeholder="请输入Sku名称"
          v-model="skuInfo.skuName"
        ></el-input>
      </el-form-item>
      <el-form-item label="价格（元）">
        <el-input
          type="number"
          placeholder="价格（元）"
          v-model="skuInfo.price"
        ></el-input>
      </el-form-item>
      <el-form-item label="重量（千克）">
        <el-input
          placeholder="重量（千克）"
          v-model="skuInfo.weight"
        ></el-input>
      </el-form-item>
      <el-form-item label="规格描述">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="规格描述"
          v-model="skuInfo.skuDesc"
        ></el-input>
      </el-form-item>
      <el-form-item label="平台属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item
            :label="attrInfo.attrName"
            v-for="attrInfo in attrInfoList"
            :key="attrInfo.id"
          >
            <el-select v-model="attrInfo.attrIdAndValueId" placeholder="请选择">
              <el-option
                :label="attrValue.valueName"
                :value="`${attrValue.attrId}:${attrValue.id}`"
                v-for="attrValue in attrInfo.attrValueList"
                :key="attrValue.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item
            :label="saleAttr.saleAttrName"
            v-for="saleAttr in spuSaleAttrList"
            :key="saleAttr.id"
          >
            <el-select v-model="saleAttr.attrIdAndValueId" placeholder="请选择">
              <el-option
                :label="saleAttrValue.saleAttrValueName"
                :value="`${saleAttr.id}:${saleAttrValue.id}`"
                v-for="saleAttrValue in saleAttr.spuSaleAttrValueList"
                :key="saleAttrValue.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="图片列表">
        <el-table
          border
          style="width: 100%"
          :data="spuImageList"
          @selection-change="handleSelectionChange"
        >
          <el-table-column width="80px" type="selection"></el-table-column>
          <el-table-column label="图片">
            <template slot-scope="{ row }">
              <img :src="row.imgUrl" style="width: 100px" />
            </template>
          </el-table-column>
          <el-table-column label="名称" prop="imgName"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="{ row }">
              <el-button
                v-if="row.isDefault === '0'"
                type="primary"
                @click="changeDefault(row)"
              >
                设为默认
              </el-button>
              <span v-else style="color: green">默认</span>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" @click="addSku">保存</el-button>
        <el-button type="primary" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SkuForm",
  data() {
    return {
      spuInfo: {},
      spuImageList: [], // 存储图片的信息
      spuSaleAttrList: [], // 存储销售属性的信息
      attrInfoList: [], // 存储平台属性的数据
      // 收集Sku信息
      skuInfo: {
        // 第一类收集的数据：来自于父组件
        category3Id: 0,
        tmId: 0,
        spuId: 0,
        // 第二类：需要通过数据双向绑定v-model收集
        skuName: "",
        price: 0,
        weight: "",
        skuDesc: "",
        // 第三类：需要自己书写代码手动收集
        // 默认图片
        skuDefaultImg: "",
        // 收集图片的字段
        skuImageList: [
          // {
          //   imgName: "",
          //   imgUrl: "",
          //   isDefault: "",
          //   spuImgId: 0,
          // },
        ],
        // 平台属性
        skuAttrValueList: [
          // {
          //   attrId: 0,
          //   valueId: 0,
          // },
        ],
        // 销售属性
        skuSaleAttrValueList: [
          // {
          //   saleAttrId: 0,
          //   saleAttrValueId: 0,
          // },
        ],
      },
      // 收集图片的数据字段
      skuImageList: [],
    };
  },
  methods: {
    async initSkuData(category1Id, category2Id, spu) {
      const { category3Id, id: spuId, tmId } = spu;
      this.spuInfo = spu;
      Object.assign(this.skuInfo, { category3Id, tmId, spuId });

      const spuImageResult = await this.$API.spu.reqSpuImageList(spuId);
      if (spuImageResult.code === 200) {
        this.spuImageList = spuImageResult.data.map((e) => {
          return { ...e, isDefault: "0" };
        });
      }
      const spuSaleAttrResult = await this.$API.spu.reqSpuSaleAttrList(spuId);
      if (spuSaleAttrResult.code === 200) {
        this.spuSaleAttrList = spuSaleAttrResult.data;
      }
      const attrInfoResult = await this.$API.spu.reqAttrInfoList({
        category1Id,
        category2Id,
        category3Id,
      });
      if (attrInfoResult.code === 200) {
        this.attrInfoList = attrInfoResult.data;
      }
    },
    /**
     * 选择图片触发事件
     * selection 是spuImageList的子集，由选中的元素组成
     * [{id,imgName,imgUrl,spuId}]
     * 需要注意：比其skuInfo.skuImageList想要的数据，还缺少isDefault字段。
     */
    handleSelectionChange(selection) {
      this.skuImageList = selection;
    },
    // 设置默认图片事件
    changeDefault(spuImage) {
      this.spuImageList.forEach((e) => (e.isDefault = "0"));
      spuImage.isDefault = "1";
      // 收集默认图片的地址
      this.skuInfo.skuDefaultImg = spuImage.imgUrl;
    },
    // 添加Sku
    async addSku() {
      // 整理参数
      const { attrInfoList, spuSaleAttrList, skuInfo, skuImageList } = this;
      // 整理平台属性：方式一
      // #region
      // skuInfo.skuAttrValueList = attrInfoList
      //   .filter((e) => e.attrIdAndValueId)
      //   .map((e) => {
      //     const [attrId, valueId] = e.attrIdAndValueId.split(":");
      //     return { attrId, valueId };
      //   });
      // #endregion

      // 整理平台属性：方式二
      skuInfo.skuAttrValueList = attrInfoList.reduce((prev, current) => {
        if (current.attrIdAndValueId) {
          const [attrId, valueId] = current.attrIdAndValueId.split(":");
          prev.push({ attrId, valueId });
        }
        return prev;
      }, []);

      // 整理销售属性
      skuInfo.skuSaleAttrValueList = spuSaleAttrList.reduce((prev, current) => {
        if (current.attrIdAndValueId) {
          const [saleAttrId, saleAttrValueId] =
            current.attrIdAndValueId.split(":");
          prev.push({ saleAttrId, saleAttrValueId });
        }
        return prev;
      }, []);

      // 整理图片的数据
      skuInfo.skuImageList = skuImageList.map((e) => {
        const { imgName, imgUrl, isDefault, id: spuImgId } = e;
        return {
          imgName,
          imgUrl,
          isDefault,
          spuImgId,
        };
      });

      // 发送请求
      const result = await this.$API.spu.reqSaveSkuInfo(skuInfo);
      if (result.code === 200) {
        // 清理数据
        Object.assign(this._data, this.$options.data.call(this));
        this.$emit("changeScene", { scene: 0 });
        return this.$message({ type: "success", message: "添加Sku成功！" });
      }
    },
    cancel() {
      this.$emit("changeScene", { scene: 0 });
      // 清理数据
      /**
       * Object.assign()  ES6提供的方法，将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
       * 第一个参数是目标对象，后面的一个到多个是源对象。
       * this._data 组件实例的data对象
       * this.$options.data() 当前组件的配置对象的data函数
       */
      Object.assign(this._data, this.$options.data.call(this));
    },
  },
};
</script>

<style scoped>
</style>