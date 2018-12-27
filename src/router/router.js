import Router from 'vue-router';

// 导入对应的路由组件
import HomeContainer from '@/components/tabbar/HomeContainer.vue';
import ShopContainer from '@/components/tabbar/ShopContainer.vue';
import ShopcarContainer from '@/components/tabbar/ShopcarContainer.vue';
import MineContainer from '@/components/tabbar/MineContainer.vue';
import NewsList from '@/components/news/NewsList.vue';
import NewsInfo from '@/components/news/NewsInfo.vue';
import MoviesList from '@/components/movie/MoviesList.vue';
import PicturesList from '@/components/picture/PicturesList.vue';
import MusicSearch from '@/components/music/MusicSearch.vue';
import MusicInfo from '@/components/music/MusicInfo.vue';
import HotStory from '@/components/story/HotStory.vue';
import MoviesInfo from '@/components/movie/MoviesInfo.vue';
import GoodsInfo from '@/components/goods/GoodsInfo';


// 创建路由对象
var router = new Router({
  routes: [
    { path: '/', redirect: './home' },
    { path: '/home', component: HomeContainer },
    { path: '/shop', component: ShopContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/mine', component: MineContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:uniquekey', component: NewsInfo},
    { path: '/home/movieslist', component: MoviesList },
    { path: '/home/moviesinfo/:id', component: MoviesInfo },
    { path: '/home/pictureslist', component: PicturesList },
    { path: '/home/musicsearch', component: MusicSearch },
    { path: '/home/musicinfo/:id', component: MusicInfo },
    { path: '/home/hotstory', component: HotStory },
    { path: '/shop/goodsinfo/:id', component: GoodsInfo }
    
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮类[router-link-active]
});

// 导出路由
export default router;