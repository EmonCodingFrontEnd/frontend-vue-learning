<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "BarChart",
  mounted() {
    const lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      xAxis: { show: false, min: 0, max: 100 },
      yAxis: { show: false, type: "category" },
      series: [
        {
          type: "bar",
          data: [78],
          color: "yellowgreen",
          // 柱状图的宽度
          barWidth: 10,
          // 设置背景颜色
          showBackground: true,
          backgroundStyle: { color: "#eee" },
          // 文本标签
          label: {
            show: true,
            // 改变文本标签的内容
            formatter: "|",
            // 文本标签的位置
            position: "right",
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