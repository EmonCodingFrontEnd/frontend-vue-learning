<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="¥ 126560">
            <template slot="charts">
              <span
                >周同比：&nbsp;&nbsp;56.67%
                <svg
                  t="1703082699637"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="11171"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 0l341.333333 349.354667-273.066666-0.085334V1024H443.733333V349.269333H170.666667L512 0z"
                    fill="#1afa29"
                    p-id="11172"
                  ></path>
                </svg>
              </span>
              &nbsp;&nbsp;
              <span
                >日同比：&nbsp;&nbsp;19.16
                <svg
                  t="1703082768935"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="12343"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 1024L170.666667 674.645333l273.066666 0.085334V0h136.533334v674.730667H853.333333L512 1024z"
                    fill="#d81e06"
                    p-id="12344"
                  ></path>
                </svg>
              </span>
            </template>
            <template slot="footer">
              <span>日销售额 ¥ 12423</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="88460">
            <template slot="charts">
              <LineChart></LineChart>
            </template>
            <template slot="footer">
              <span>日访问量 ¥ 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" :count="88460">
            <template slot="charts">
              <BarChart></BarChart>
            </template>
            <template slot="footer">
              <span>转换率 64%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          ><Detail title="运营活动效果" count="78%">
            <template slot="charts">
              <ProgressChart></ProgressChart>
            </template>
            <template slot="footer">
              <span
                >周同比：&nbsp;&nbsp;12%
                <svg
                  t="1703082699637"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="11171"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 0l341.333333 349.354667-273.066666-0.085334V1024H443.733333V349.269333H170.666667L512 0z"
                    fill="#1afa29"
                    p-id="11172"
                  ></path>
                </svg>
              </span>
              &nbsp;&nbsp;
              <span
                >日同比：&nbsp;&nbsp;11%
                <svg
                  t="1703082768935"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="12343"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 1024L170.666667 674.645333l273.066666 0.085334V0h136.533334v674.730667H853.333333L512 1024z"
                    fill="#d81e06"
                    p-id="12344"
                  ></path>
                </svg>
              </span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import ProgressChart from "./ProgressChart";

export default {
  name: "Card",
  components: { Detail, LineChart, BarChart, ProgressChart },
};
</script>

<style scoped>
</style>