<template>
    <div class="goodsinfo-container">
        <!-- 加购小球 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"></div>
        </transition>

        <!-- 輪播區域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner image">
                    <img :src="goodsInfoList.url" alt="">
                </div>
            </div>
        </div>

        <!-- 購買 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfoList.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del class="old">￥{{ goodsInfoList.market_price }}</del>&nbsp;&nbsp;&nbsp;
                        促销价：<span class="new">￥{{ goodsInfoList.sell_price}}</span>
                    </p>
                    <p class="number">
                        <span>购买数量:</span>
                        <numbox class="num" @getcount="getSelectedCount" :max="goodsInfoList.stock_quantity"></numbox>
                    </p>

                    <p class="bt">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 參數區域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="model">商品型号：{{ goodsInfoList.goods_no }}</p>
                    <p class="model">上架时间：{{ goodsInfoList.add_time }}</p>
                    <p class="store">剩余库存：{{ goodsInfoList.stock_quantity }} 件</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button class="mt" type="primary" size="large" plain>图文详情</mt-button>
                <mt-button class="mt" type="danger" size="large" plain>买家评论</mt-button>
            </div>
        </div>

    </div>    
</template>

<script>
import { Toast } from "mint-ui";
// 导入数字选择框组件
import numbox from '../pubcomponents/goodsinfo-numbox'

export default {
    data(){
        return{
            goodsInfoList: [],
            id: this.$route.params.id, //拿到路由参数中的id值
            ballFlag: false, // 设置小球初始状态为隐藏
            selectedCount: 1  // 默认用户选中的购买数量
        }
    },
    created(){
        this.getGoodsInfo();
    },
    methods:{
        getGoodsInfo(){
            this.$axios.get('/goodsapi/goodsinfo/' + this.id).then(res => {
                // console.log(res.data.data);
                if(res.data.code === 200){
                    this.goodsInfoList = res.data.data[this.id -1];
                    // console.log(res.data.data[this.id - 1]);
                }else{
                    Toast('服务器开小车啦...');
                }
            })
        },
        addToShopCar(){
            this.ballFlag = !this.ballFlag;

            // 得到一个要保存在store中的shopCar数组里的商品对象
            var goodsinfo = {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsInfoList.sell_price,
                seleted: true // 加入购物车过的商品， 默认是被选中要购买的， 表示选中状态
            }

            // 调用 store中的mutations 中的方法
            this.$store.commit('addToCar', goodsinfo);
        },

        beforeEnter(el){
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;
            el.style.transform = "translate(90px, 259px)";
            el.style.transition = "all 1s cubic-bezier(1,.02,0,.99)";
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },

        getSelectedCount(count){
            // 子组件把选中的数量传递给父组件 把值保存在 data上
            this.selectedCount = count;
            console.log(count);
        }
    },
    components:{
        numbox
    }
    
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #c0c0c0;
    overflow: hidden;

    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 361px;
        left: 147px;
    }


    .mui-card{
        .image{
            width: 100%;
            height: 200px;
            img{
                width: 100%;
                height: 100%;
            }
        }

        .price{
            .new{
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
        }

        .number{
            height: 35px;
            line-height: 35px;
            display: flex;
            // justify-content: space-between;
            .num{
                margin-left: 10px;
            }
        }


        .mui-card-footer{
            display: block;
            .mt:last-child{
                margin-top: 15px;
            }
        }
        
    }
}
</style>

