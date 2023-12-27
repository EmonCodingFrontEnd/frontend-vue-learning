import { reactive, onMounted, onUnmounted } from "vue";

export default function () {
  // 实现鼠标“打点”相关的数据
  let point = reactive({ x: 0, y: 0 });

  // 实现鼠标“打点”相关的方法
  const savePoint = (event) => {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(point);
  };

  // 实现鼠标“打点”相关的生命周期钩子
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });
  onUnmounted(() => {
    window.removeEventListener("click", savePoint);
  });

  return point;
}
