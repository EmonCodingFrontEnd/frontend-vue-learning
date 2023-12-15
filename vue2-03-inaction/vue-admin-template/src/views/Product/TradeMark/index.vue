<template>
  <div>
    <!-- 按钮 -->
    <el-button
      type="primary"
      icon="el-icon-plus"
      style="margin: 10px 0px"
      @click="showDialog"
      >添加</el-button
    >
    <!-- 
      表格组件
      data    显示的数据
      border  是否带有纵向边框
      column属性：
        label	  显示的标题
        align	  对齐方式(left/center/right)
        index   如果设置了 type=index ，可以通过传递index属性来自定义索引
        prop    对应列内容的字段名，也可以使用property属性
        注意1：elementUI当中的table组件，展示的数据是以一列一列进行展示
     -->
    <el-table style="width: 100%" border :data="list">
      <el-table-column
        type="index"
        :index="(page - 1) * limit + 1"
        label="序号"
        width="80px"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="tmName" label="品牌名称" width="width">
      </el-table-column>
      <el-table-column label="品牌LOGO" width="width">
        <template slot-scope="{ row }">
          <img :src="row.logoUrl" style="width: 100px" />
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
        <template slot-scope="{ row }">
          <el-button
            type="warning"
            icon="el-icon-edit"
            size="mini"
            @click="updateTradeMark(row)"
            >修改</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="removeTradeMark(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 
      分页器
      current-page  当前第几页
      page-size     每页展示条数
      total         数据总条数
      page-sizes    设置每页显示条数
      pager-count   页码按钮的数量，当总页数超过该值时会折叠
      @size-change="handleSizeChange"       pageSize 改变时会触发	    
      @current-change="handleCurrentChange" currentPage 改变时会触发	
     -->
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
    <!-- 
      对话框
      :visible.sync   是否显示Dialog
     -->
    <el-dialog
      :title="tmForm.id ? '修改品牌' : '添加品牌'"
      :visible.sync="dialogFormVisible"
    >
      <!-- form表单
        model属性，这个属性的作用是把表单的数据收集到哪个对象，将来表单验真，也需要这个属性
        Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。
       -->
      <el-form style="width: 80%" :model="tmForm" :rules="tmRules" ref="tmForm">
        <el-form-item label="品牌名称" label-width="100px" prop="tmName">
          <!-- autocomplete="off"关闭自动填充 -->
          <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
          <!-- 
            这里收集数据，不能使用v-model，因为不是表单元素
            action          设置图片上传地址
            :on-success     可以检测到图片上传成功，当图片上传成功则会执行一次
            :before-upload    可以在上传图片之前，执行一次
           -->
          <el-upload
            class="avatar-uploader"
            action="/dev-api-8510/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdateTradeMark"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TradeMark",
  data() {
    // 自定义校验规则
    var validateTmName = (rule, value, callback) => {
      if (value.length < 2 || value.length > 10) {
        callback(new Error("品牌名称2-10位"));
      } else {
        callback();
      }
    };
    return {
      page: 1,
      limit: 3,
      total: 0,
      // 列表展示的数据
      list: [],
      // 对话框显示与隐藏控制的属性
      dialogFormVisible: false,
      // 收集品牌信息：对象身上的属性，要与表单对象的对应
      tmForm: {
        tmName: "",
        logoUrl: "",
      },
      // 表单验证的规则
      tmRules: {
        /**
         * 品牌名称的验证规则
         * required 必须校验规则，值为true时会自动添加字段前的红色星号
         * message  提示信息
         * trigger  用户行为设置（blue、change等）
         * min 品牌名称的长度最小值
         * max 品牌名称的长度最大值
         */
        tmName: [
          { required: true, message: "请输入品牌名称", trigger: "blur" },
          // 自定义校验规则
          { validator: validateTmName, trigger: "change" },
          // {
          //   min: 2,
          //   max: 10,
          //   message: "长度在 2 到 10 个字符",
          //   trigger: "change",
          // },
        ],
        // 品牌logo的验证规则
        logoUrl: [{ required: true, message: "请选择品牌的图片" }],
      },
    };
  },
  computed: {
    maxPage() {
      return Math.ceil(this.total / this.limit);
    },
  },
  methods: {
    async getPageList() {
      const { page, limit } = this;
      const result = await this.$API.tradeMark.reqTradeMarkList(page, limit);
      if (result.code === 200) {
        this.total = result.data.total;
        this.list = result.data.records;
      }
    },
    handleSizeChange(limit) {
      this.page = 1;
      this.limit = limit;
      this.getPageList();
    },
    handleCurrentChange(page) {
      this.page = page;
      this.getPageList();
    },
    // 点击添加品牌的按钮
    showDialog() {
      this.dialogFormVisible = true;
      // 清除数据
      this.tmForm = { tmName: "", logoUrl: "" };
    },
    // 修改某一个品牌
    updateTradeMark(row) {
      // row：当前用户选中这个品牌信息
      // 显示对话框
      this.dialogFormVisible = true;
      // 不能直接将row赋值给tmForm，要浅拷贝过去，避免修改界面和列表数据共享同一个引用
      this.tmForm = { ...row };
    },
    // 删除某一个品牌
    async removeTradeMark(row) {
      this.$confirm(`你确定删除${row.tmName}？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        // 当用户点击确定按钮的时候会触发
        .then(async () => {
          const result = await this.$API.tradeMark.reqRemoveTradeMark(row.id);
          if (result.code === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            // 再次获取品牌列表数据 注意：并发下，设置page=1比较合适
            if (this.list.length === 1) {
              this.page = Math.max(1, this.page - 1);
            }
            this.getPageList();
          }
        })
        // 当用户点击取消按钮的时候会触发
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 文件上传成功时的钩子
    handleAvatarSuccess(res, file, fileList) {
      // res：上传成功支行返回前端数据
      this.tmForm.logoUrl = res.data;
    },
    // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 添加按钮（添加或者修改品牌信息）
    async addOrUpdateTradeMark() {
      const tradeMark = this.tmForm;
      // return alert("你不验证？");
      // 当全部字段验证通过
      this.$refs.tmForm.validate(async (valid) => {
        // 如果全部字段都校验通过
        if (valid) {
          const result = await this.$API.tradeMark.reqAddOrUpdateTradeMark(
            tradeMark
          );
          if (result.code === 200) {
            this.dialogFormVisible = false;
            // 弹出信息：添加品牌成功，修改品牌成功
            this.$message({
              type: "success",
              message: this.tmForm.id ? "修改品牌成功！" : "添加品牌成功！",
            });
            // 添加或者修改品牌成功之后，需要再次获取品牌列表信息进行展示 注意：并发下设置page=1比较合适
            if (this.list.length === this.limit) {
              this.page = this.page + 1;
            } else {
              this.page = this.maxPage;
            }
            this.getPageList();
          } else {
            this.$message.error(
              (this.tmForm.id ? "修改品牌失败！" : "添加品牌失败！") +
                result.message
            );
          }
        } else {
          console.log("error submit!");
          return valid;
        }
      });
    },
  },
  mounted() {
    // 获取列表数据方法
    this.getPageList();
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>