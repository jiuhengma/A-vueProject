<template>
    <div class="shopcontainer">
        <!-- 搜索框 -->
        <div class="search">
            <input type="text" placeholder="请输入要查找的商品名称" v-model="keywords" @keyup.13="Search">
            <button @click="Search">搜索</button>
        </div>

        <!-- 商品列表 -->
        <div class="goods">
            <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
                <p class="img"><img :src="item.url" alt=""></p>
                <div class="info" >
                    <p class="name">{{ item.title }}</p>
                    <p class="price">
                        <span class="oldprice">原价：￥<span>{{ item.oldprice }}</span></span>
                        <span class="nowprice">促销：￥<span style="color:red">{{ item.nowprice }}</span></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            keywords:'',
            goodslist:[],
            // id: this.$route.params.id //拿到路由参数中的id值
        }
    },
    created(){
        this.getgoodslist();
        this.Search();
    },
    methods:{
        getgoodslist(){
            //请求商品数据 api: http://127.0.0.1:8088/goodslist
            this.$axios.get('/goodsapi/goodslist').then(res => {
                // console.log(res.data.data);
                if(res.data.code === 200){
                    this.goodslist = res.data.data;
                }else{
                    Toast('服务器开小车啦...');
                }
            })
        },

        Search(){
            
        },

        goDetail(id){
            this.$router.push('/shop/goodsinfo/' + id)
            // console.log(this)
        }
        // Search(){
        //     this.$axios.get('/goodsapi/goodslist').then(res => {
        //         if(res.data.code === 200){
        //             var item = res.data.data;
        //             for(var i in item){
        //                 console.log(res.data.data[i].category)
        //                 console.log(this.keywords)
        //                 if(this.keywords == item[i].category){
        //                     this.goodslist = item;
        //                 }
        //             }
        //         }
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>
.shopcontainer{
    
    padding:5px;
    
    .search{
        // position: fixed;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: center;

        input{
            height: 40px;
            width: 60%;
            caret-color: #408080;
            padding-right: 5px;
            font-size: 14px;
            border-radius: 9px;
            background-color: rgba(71, 141, 141, 0.3);
        }
        button{
            width: 15%;
            height: 40px;
            margin-left: 3px;
            background-color: rgba(64, 128, 128, 0.8);
            border-radius: 9px;
            box-shadow: 3px 3px 5px #c0e0e0;
        }

        button:active{
            transform: translateY(1px)
        }

    }

    .goods{
        margin-top: -10px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: space-between;
        -webkit-justify-content: space-between;

        .goods-item{
            width: 49.3%;
            border: 1px solid #c0c0c0;
            margin-top: 3px;
            box-shadow: 2px 2px 5px rgba(64, 128, 128, 0.5);

            .img{
                // width: 178px;
                height: 178px;

                img{
                    width: 100%;
                    height: 100%;
                    padding: 3px;
                }
            }
            .info{
                margin: -13px 3px 0 3px;

                .name{
                    // height: 30px;
                    font-size: 12px;
                    line-height: 16px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .price{
                    margin: -8px 0 2px 0;
                    font-size: 10px;
                    display: flex;
                    justify-content: space-between;                    -webkit-justify-content: space-between;
                    .oldprice{
                        text-decoration: red line-through;
                    }

                }
            }
        }
    }


    
}
</style>