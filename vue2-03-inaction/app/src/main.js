import Vue from 'vue'
import App from './App.vue'

// 三级联动组件——全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
// 按需引入ElementUI组件
import { Button, MessageBox, Message, Input } from 'element-ui';

// 第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
// ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

// 引入 MockServer.js---mock数据
import '@/mock/mockServer'
// 引入Swiper样式
import "swiper/css/swiper.min.css";

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store';
// 引入api接口
import * as API from '@/api'
// 引入插件
import VueLazyload from 'vue-lazyload'
// or with options
const loadimage = require('@/assets/loading.gif')
// 引入自定义的插件
import MyPlugins from '@/plugins/MyPlugins'
Vue.use(MyPlugins, 'lm');
// 引入表单校验插件
import '@/plugins/validate'

Vue.use(VueLazyload, {
  // 懒加载的默认图
  loading: loadimage,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由：下面的写法KV一致，忽略V；当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store
  store,
  //配置全局事件总线
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //通过Vue.prototype原型对象,将全部请求函数挂载到原型对象身上[VC:就可以使用请求函数]
    Vue.prototype.$API = API;
  },
}).$mount('#app')
