// 入口文件
import Vue from 'vue';

// 导入路由的包
import Router from 'vue-router';
// 安装路由
Vue.use(Router);

// 导入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

// 每次进入APP时 都会先把存放在LocalStorage中的数据取出来 再放到 store 的 state 中
var shopCar = JSON.parse(localStorage.getItem('shopCar') || '[]')

const store = new Vuex.Store({
  state:{// this.$store.state.xxx
    shopCar: shopCar // 接收并存储加入购物车中的所有商品数据

  },
  mutations:{// this.$store.commit('方法名', '参数')
    addToCar(state, goodsinfo){// 点击加购 把商品数据保存到 store 中的 shopCar 数组上
      // 先判断shopCar中是否已有该商品 如果有则只更新数量，没有则把数据 push即可
      
      // 设置标志服 默认shopCar中没有该商品
      var flag = false;
      
      // 如果存在
      state.shopCar.some(item => {
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true;
          return true;
        }
      })

      // 不存在
      if(!flag){
        state.shopCar.push(goodsinfo);
      }

      // 当更新完 shopCar 后， 把shopCar中的数据存在本地 LocalStorage 一份
      localStorage.setItem('shopCar', JSON.stringify(state.shopCar));


    }
  },
  getters:{// this.$store.getters.xxx
    // 计算加入购物车的总数量 并同步到徽标
    getAllCount(state){
      let c = 0; // 初始化总数量为零
      state.shopCar.forEach(item => {
        c += item.count;
      })
      return c;
    }

  }

})

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
import { Header,Swipe, SwipeItem,Button, Switch } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

// 导入Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';



var vm = new Vue({
  el: '#app',
  render: c => c(app),
  // 挂载路由对象到实例
  router,
  // 挂载store对象
  store

});