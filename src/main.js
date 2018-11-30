// 入口文件
import Vue from 'vue';

// 导入路由的包
import Router from 'vue-router';
// 安装路由
Vue.use(Router);

// 引入axios
import axios from 'axios';//引入axios
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上


// 导入vue-resource
import  VueResource  from 'vue-resource';
Vue.use(VueResource);

// 导入格式化时间插件
import moment from 'moment';
// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
});

// 导入项目中的路由模块
import router from './router/router';
// 导入APP根组件
import app from './App';

// 导入MUI 的样式
import '../static/mui/css/mui.min.css';
import '../static/mui/css/icons-extra.css';

// 按需导入mint-ui组件
import { Header,Swipe, SwipeItem,Button, } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';



var vm = new Vue({
  el: '#app',
  render: c => c(app),
  // 挂载路由对象到实例
  router
});