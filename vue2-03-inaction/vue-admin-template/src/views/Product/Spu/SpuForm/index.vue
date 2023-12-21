<template>
  <div>
    <el-form ref="form" label-width="80px" :model="spuInfo">
      <el-form-item label="Spu名称">
        <el-input placeholder="Spu名称" v-model="spuInfo.spuName"></el-input>
      </el-form-item>
      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌" v-model="spuInfo.tmId">
          <el-option
            :label="tm.tmName"
            :value="tm.id"
            v-for="tm in tradeMarkList"
            :key="tm.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Spu描述">
        <el-input
          type="textarea"
          rows="4"
          placeholder="Spu描述"
          v-model="spuInfo.description"
        ></el-input>
      </el-form-item>
      <el-form-item label="Spu图片">
        <!-- 
          上传图片
          action      图片上传的地址
          list-type   文件列表的类型
          file-list   照片墙展示时需要的数据（数组：[{name:'',url:''}]）
          on-preview  图片预览的时候会触发
          on-remove   图片删除时触发
         -->
        <el-upload
          action="/dev-api-8510/admin/product/fileUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="spuImageList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-select
          :placeholder="`还有${unSelectSaleAttr.length}未选择`"
          v-model="attrIdAndAttrName"
        >
          <el-option
            :label="unSelect.name"
            :value="`${unSelect.id}:${unSelect.name}`"
            v-for="unSelect in unSelectSaleAttr"
            :key="unSelect.id"
          ></el-option>
        </el-select>
        <el-button
          type="primary"
          icon="el-icon-plus"
          style="margin-left: 5px"
          :disabled="!attrIdAndAttrName"
          @click="addSaleAttr"
          >添加销售属性</el-button
        >
        <el-table
          style="width: 100%; margin-top: 10px"
          border
          :data="spuInfo.spuSaleAttrList"
        >
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="saleAttrName" label="属性名" width="100px">
          </el-table-column>
          <el-table-column label="属性值名称列表">
            <template slot-scope="{ row }">
              <el-tag
                type="success"
                v-for="(saleAttrValue, index) in row.spuSaleAttrValueList"
                :key="saleAttrValue.id"
                closable
                :disable-transitions="false"
                @close="handleClose(row, index, saleAttrValue)"
              >
                {{ saleAttrValue.saleAttrValueName }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="row.inputVisible"
                v-model.trim="row.inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm(row)"
                @blur="handleInputConfirm(row)"
              >
              </el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="addSaleAttrValue(row)"
                >添加
              </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="100px">
            <template slot-scope="{ row, $index }">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="deleteSaleAttr(row, $index)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addOrUpdateSpu">保存</el-button>
        <el-button type="primary" @click="cancel">取消 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { RunJSError } from "runjs/lib/common";
export default {
  name: "SpuForm",
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      // 存储Spu信息
      spuInfo: {
        // 三级分类的id
        category3Id: undefined,
        // 描述
        description: "",
        // Spu名称
        spuName: "",
        // 品牌的id
        tmId: undefined,
        // 收集Spu图片的信息
        spuImageList: [
          // {
          //   id: 0,
          //   imgName: "string",
          //   imgUrl: "string",
          //   spuId: 0,
          // },
        ],
        // 平台属性与属性值收集
        spuSaleAttrList: [
          // {
          //   baseSaleAttrId: 0,
          //   id: 0,
          //   saleAttrName: "string",
          //   spuId: 0,
          //   spuSaleAttrValueList: [
          // {
          //   baseSaleAttrId: 0,
          //   id: 0,
          //   isChecked: "string",
          //   saleAttrName: "string",
          //   saleAttrValueName: "string",
          //   spuId: 0,
          // },
          // ],
          // },
        ],
      },
      tradeMarkList: [], // 存储品牌列表
      spuImageList: [], // 存储Spu图片列表，也负责收集照片墙图片
      saleAttrList: [], // 存储平台销售属性列表
      attrIdAndAttrName: "", // 收集未选择的销售属性的id
    };
  },
  methods: {
    // 初始化SpuForm数据
    async initSpuData(spu) {
      const { id: spuId } = spu;

      if (spuId) {
        // 获取Spu信息的数据
        const spuInfoResult = await this.$API.spu.reqSpuInfo(spuId);
        if (spuInfoResult.code === 200) {
          this.spuInfo = spuInfoResult.data;
        }
        // 获取Spu图片信息
        const spuImageResult = await this.$API.spu.reqSpuImageList(spuId);
        if (spuImageResult.code === 200) {
          this.spuImageList = spuImageResult.data;
          // 由于照片墙显示图片的数据需要数组，并且数组的元素需要有name和url字段。
          this.spuImageList = this.spuImageList.map((e) => {
            return { name: e.imgName, url: e.imgUrl, ...e };
          });
        }
      } else {
        this.spuInfo = { ...spu, spuSaleAttrList: [] };
        this.spuImageList = [];
      }
      // 获取品牌信息
      const tradeMarkResult = await this.$API.spu.reqTradeMarkList();
      if (tradeMarkResult.code === 200) {
        this.tradeMarkList = tradeMarkResult.data;
      }
      // 获取平台销售属性信息
      const saleAttrResult = await this.$API.spu.reqSaleAttrList();
      if (saleAttrResult.code === 200) {
        this.saleAttrList = saleAttrResult.data;
      }
    },
    // 上传新图片成功时
    handleSuccess(res, file, fileList) {
      /**
       * 对于添加的照片，没有imgName和imgUrl，将来提交时应该映射出来这两个属性
       */
      this.spuImageList = fileList;
    },
    // 移除图片时 file-被删除的图片；fileList-剩余的图片
    handleRemove(file, fileList) {
      /**
       * 对于编辑时回显的照片，是具有name和url属性的，因为照片墙回显需要这两个字段。
       * 将来提交时，应该去掉这种字段
       */
      this.spuImageList = fileList;
    },
    // 点击+号预览图片时
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 添加新的销售属性
    addSaleAttr() {
      // 已经收集到的销售数据的信息
      const [baseSaleAttrId, saleAttrName] = this.attrIdAndAttrName.split(":");
      this.spuInfo.spuSaleAttrList.push({
        baseSaleAttrId,
        saleAttrName,
        spuSaleAttrValueList: [],
      });
      // 清空已选属性
      this.attrIdAndAttrName = "";
    },
    // 删除销售属性
    deleteSaleAttr(row, $index) {
      // index可以直接传递，也可以重新查找
      // const { saleAttrName } = row;
      // this.spuInfo.spuSaleAttrList.findIndex((e) => {
      //   return e.saleAttrName === saleAttrName;
      // });
      this.spuInfo.spuSaleAttrList.splice($index, 1);
    },
    // 关闭属性值标签
    handleClose(row, index, saleAttrValue) {
      // index可以直接传递，也可以重新查找
      // const { saleAttrValueName } = saleAttrValue;
      // row.spuSaleAttrValueList.findIndex((e) => {
      //   return e.saleAttrValueName === saleAttrValueName;
      // });
      row.spuSaleAttrValueList.splice(index, 1);
    },
    // 点击添加属性值按钮
    addSaleAttrValue(row) {
      // 点击销售属性值当中添加按钮的时候，需要有button变为input，通过当前值的inputVisible控制
      this.$set(row, "inputVisible", true);
      this.$set(row, "inputValue", "");
      this.$nextTick((_) => {
        this.$refs.saveTagInput.focus(); // 调用el-input组件的focus方法
        // this.$refs.saveTagInput.$refs.input.focus(); // 调用el-input组件中的内部input的focus方法
      });
    },
    // 属性值输入框失去焦点和enter事件的回调函数
    handleInputConfirm(row) {
      const {
        baseSaleAttrId,
        saleAttrName,
        inputValue: saleAttrValueName,
      } = row;
      if (saleAttrValueName) {
        const existDuplicate = row.spuSaleAttrValueList.some(
          (e) => e.saleAttrValueName === saleAttrValueName
        );
        if (existDuplicate) {
          return this.$message("同名属性值已存在！");
        }

        row.spuSaleAttrValueList.push({
          baseSaleAttrId,
          isChecked: null,
          saleAttrName,
          saleAttrValueName,
        });
      } else {
        return this.$message("属性值不允许为空！");
      }
      row.inputVisible = false;
      row.inputValue = "";
    },
    // 添加或修改Spu
    async addOrUpdateSpu() {
      // 整理参数：整理照片墙，新增的照片
      this.spuInfo.spuImageList = this.spuImageList.map((e) => {
        return {
          id: e.id,
          spuId: e.spuId,
          imgName: e.name,
          imgUrl: (e.response && e.response.data) || e.url,
        };
      });
      const result = await this.$API.spu.reqAddOrUpdateSpu(this.spuInfo);
      if (result.code === 200) {
        // 清理数据
        Object.assign(this._data, this.$options.data());
        this.$emit("changeScene", { scene: 0, isAdd: !this.spuInfo.id });
        return this.$message({ type: "success", message: "提交成功！" });
      }
    },
    cancel() {
      this.$emit("changeScene", { scene: 0, isAdd: false });
      // 清理数据
      /**
       * Object.assign()  ES6提供的方法，将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
       * 第一个参数是目标对象，后面的一个到多个是源对象。
       * this._data 组件实例的data对象
       * this.$options.data() 当前组件的配置对象的data函数
       */
      Object.assign(this._data, this.$options.data());
    },
  },
  computed: {
    // 计算出还未选择的销售属性
    unSelectSaleAttr() {
      // 整个平台的销售属性：颜色、尺寸、版本 --- saleAttrList
      // 当前Spu已有的销售属性： --- spuInfo.spuSaleAttrList
      return this.saleAttrList.filter((e) => {
        return this.spuInfo.spuSaleAttrList.every((innerItem) => {
          return innerItem.saleAttrName !== e.name;
        });
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>