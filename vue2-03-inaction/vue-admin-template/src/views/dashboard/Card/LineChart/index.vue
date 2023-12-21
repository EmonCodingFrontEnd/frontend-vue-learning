<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "LineChart",
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
          lineStyle: { color: "purple" }, // 线条样式
          // 区域填充样式
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "purple" }, // 0% 处的颜色
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
.charts {
  width: 100%;
  height: 100%;
}
</style>