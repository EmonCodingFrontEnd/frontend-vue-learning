<template>
  <div class="sale">
    <el-card style="margin: 10px 0px">
      <div slot="header" class="clearfix">
        <!-- 头部左侧内容 -->
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
          <el-tab-pane label="销售额" name="sale"> </el-tab-pane>
          <el-tab-pane label="访问量" name="visit"> </el-tab-pane>
        </el-tabs>
        <!-- 头部右侧内容 -->
        <div class="right">
          <span @click="setDay">今日</span>
          <span @click="setWeek">本周</span>
          <span @click="setMonth">本月</span>
          <span @click="setYear">本年</span>
          <el-date-picker
            v-model="date"
            value-format="yyyyMMdd"
            class="date"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
          >
          </el-date-picker>
        </div>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="18">
            <!-- 容器 -->
            <div class="charts" ref="charts">1</div>
          </el-col>
          <el-col :span="6" class="right">
            <h3>门店{{ title }}排名</h3>
            <ul>
              <li>
                <span class="rindex rbg">1</span>
                <span>肯德基</span>
                <span class="rvalue">323,234</span>
              </li>
              <li>
                <span class="rindex rbg">2</span>
                <span>麦当劳</span>
                <span class="rvalue">299,132</span>
              </li>
              <li>
                <span class="rindex rbg">3</span>
                <span>肯德基</span>
                <span class="rvalue">283,998</span>
              </li>
              <li>
                <span class="rindex">4</span>
                <span>海底捞</span>
                <span class="rvalue">266,233</span>
              </li>
              <li>
                <span class="rindex">5</span>
                <span>西北莜面村</span>
                <span class="rvalue">233,445</span>
              </li>
              <li>
                <span class="rindex">6</span>
                <span>汉堡王</span>
                <span class="rvalue">219,663</span>
              </li>
              <li>
                <span class="rindex">7</span>
                <span>真功夫</span>
                <span class="rvalue">200,997</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
import dayjs from "dayjs";
import { mapState } from "vuex";

export default {
  name: "Sale",
  data() {
    return {
      activeName: "visit",
      mycharts: null,
      date: [], //收集日历的数据
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 今日
    setDay() {
      const day = dayjs().format("YYYYMMDD");
      this.date = [day, day];
    },
    // 本周
    setWeek() {
      const start = dayjs().day(1).format("YYYYMMDD");
      const end = dayjs().day(7).format("YYYYMMDD");
      this.date = [start, end];
    },
    // 本月
    setMonth() {
      const start = dayjs().startOf("month").format("YYYYMMDD");
      const end = dayjs().endOf("month").format("YYYYMMDD");
      this.date = [start, end];
    },
    // 本年
    setYear() {
      const start = dayjs().startOf("year").format("YYYYMMDD");
      const end = dayjs().endOf("year").format("YYYYMMDD");
      this.date = [start, end];
    },
    // 改变charts的数据
    changeCharts() {
      const {
        orderFullYear,
        orderFullYearAxis,
        userFullYear,
        userFullYearAxis,
      } = this.listState;
      const xdata =
        this.activeName === "sale" ? orderFullYearAxis : userFullYearAxis;
      const ydata = this.activeName === "sale" ? orderFullYear : userFullYear;
      const nv = this.activeName === "sale" ? "销售额" : "访问量";

      // 图表配置的数据可以再次修改，且可以部分修改
      this.mycharts.setOption({
        title: { text: `${nv}趋势` },
        xAxis: { data: xdata },
        series: { data: ydata },
      });
    },
  },
  mounted() {
    // 初始化echarts实例
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
      title: {
        text: `${this.title}趋势`,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            // "一月",
            // "二月",
            // "三月",
            // "四月",
            // "五月",
            // "六月",
            // "七月",
            // "八月",
            // "九月",
            // "十月",
            // "十一月",
            // "十二月",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [
            /* 10, 52, 200, 334, 390, 330, 220, 110, 98, 167, 123, 44 */
          ],
          color: "yellowgreen",
        },
      ],
    });
  },
  computed: {
    title() {
      return this.activeName === "sale" ? "销售额" : "访问量";
    },
    // ...mapState("home", ["list"]), // 方式一
    ...mapState("home", {
      listState: "list",
    }),
    // ...mapState({ listState2: (state) => state.home.list }), // 方式二
  },
  watch: {
    title(nv, ov) {
      this.changeCharts();
    },
    listState(nv, ov) {
      this.changeCharts();
    },
  },
};
</script>

<style scoped>
.sale >>> .el-card__header {
  border-bottom: none;
}

.clearfix {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.tab {
  width: 100%;
}

.right {
  position: absolute;
  right: 0px;
}

.right span {
  margin: 0px 10px;
}

.clearfix .right span {
  cursor: pointer;
}

.date {
  width: 215px;
  margin: 0 20px;
}

.charts {
  width: 100%;
  height: 300px;
}

ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0;
}

ul li {
  height: 8%;
  margin: 10px 0px;
}

.rindex {
  float: left;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}

.rbg {
  border-radius: 50%;
  background: black;
  color: white;
}

.rvalue {
  float: right;
}
</style>