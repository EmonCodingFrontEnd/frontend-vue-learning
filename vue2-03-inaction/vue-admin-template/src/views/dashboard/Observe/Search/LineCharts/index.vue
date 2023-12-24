<template>
  <div>
    <div class="header">
      <span class="search-header">搜索用户数</span>
      <svg
        t="1703081116465"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4757"
        id="mx_n_1703081116468"
        width="16"
        height="16"
      >
        <path
          d="M448 304c0-26.4 21.6-48 48-48h32c26.4 0 48 21.6 48 48v32c0 26.4-21.6 48-48 48h-32c-26.4 0-48-21.6-48-48v-32zM640 768h-256v-64h64v-192h-64v-64h192v256h64z"
          p-id="4758"
        ></path>
        <path
          d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416z"
          p-id="4759"
        ></path>
      </svg>
    </div>
    <div class="main">
      <span class="main-title">12321</span>
      <span class="main-content">17.1</span>
      <i class="el-icon-caret-top" style="color: greenyellow"></i>
      <i class="el-icon-caret-bottom" style="color: red"></i>
    </div>
    <div class="footer">
      <div class="charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "LineCharts",
  mounted() {
    const lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      xAxis: { show: false, type: "category" }, // category在x轴均分布局
      yAxis: { show: false },
      series: [
        {
          type: "line",
          smooth: true, // 平滑显示
          data: [10, 7, 33, 12, 48, 9, 29, 10, 44],
          itemStyle: { opacity: 0 }, // 折线拐点的标识圈圈是否显示
          lineStyle: { color: "blue" }, // 线条样式
          // 区域填充样式
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "blue" }, // 0% 处的颜色
                { offset: 1, color: "#fff" }, // 100% 处的颜色
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      grid: { left: 0, top: 0, right: 0, bottom: 0 },
    });
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  color: gray;
}

.search-header {
  margin-right: 20px;
}

.main {
  margin: 10px 0px;
}

.main-title {
  margin-right: 30px;
}

.main-content {
  margin-right: 10px;
}

.charts {
  width: 100%;
  height: 50px;
}
</style>