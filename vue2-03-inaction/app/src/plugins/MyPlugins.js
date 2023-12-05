export default {
  install: function (Vue, options) {
    // Vue.component
    // Vue.filter
    // Vue.directive
    // Vue.mixin
    // Vue.prototype.$bus
    if (options && options.name) {
      Vue.directive(options.name, (element, binding) => {
        // 注意此处的this是 window
        element.innerText = binding.value * 10;
      })
    }
  }
}