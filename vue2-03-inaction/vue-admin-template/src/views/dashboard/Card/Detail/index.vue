<template>
  <div>
    <div class="card-header">
      <span>{{ title }}</span>
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
    <div class="card-content">{{ count }}</div>
    <div class="card-charts">
      <slot name="charts"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["title", "count"],
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  color: #d9d9d9;
  /* font-size: 12px; */
}

.card-content {
  font-size: 30px;
  padding: 10px 0;
}

.card-charts {
  height: 50px;
}

.card-footer {
  border-top: 1px solid #eee;
  padding-top: 10px;
  height: 35px; /** 设置统一高度，避免某一个（比如运营活动效果）底部太高，导致整体高度不一致 */
}
</style>