<template>
    <div class="shopCar-container">
        <div class="goodsList">

            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        
                        <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-716116.jpg" alt="">

                        <div class="info">
                            <h3>荣耀MagicBook</h3>
                            <p>
                                <span class="price">￥3799</span>
                                <numbox class="num"></numbox>
                                <a href="javascript:;">删除</a>
                            </p>
                        </div>

                        <!-- 是否选中 -->
						<mt-switch class="switch"></mt-switch>
					</div>

				</div>
			</div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner pay">
                    <div class="left">
                        <p>总金额(包邮)</p>
                        <p>已勾选<span class="red">0</span>件商品&nbsp;&nbsp;总计<span class="red">￥0</span></p>
                    </div>
                    <mt-button type="danger" class="mt">结算</mt-button>
                </div>
            </div>
        </div>            

    </div>
</template>

<script>
import numbox from '../pubcomponents/shopcar-numbox'

export default{
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopCar-container{
    background-color: #eee;
    overflow: hidden;
    .goodsList{
        .mui-card-content-inner{
            display: flex;
            justify-content: space-around;
        }

        img{
            width: 60px;
            height: 60px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3{
                font-size: 14px;
                font-weight: 999;
            }
            p{
                display: flex;
                align-items: center;
                margin: 0;
                .price{
                    color: red;
                }
            }
        }
        .switch{
            height: 50px;
            top: -9px;
        }
    }

    .mui-card{
        .left{
            p{
                font-size: 16px;
                font-weight: 600;
                margin: 0;
            }

            span{
                color: red;
            }
        }
        .pay{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .mt{
                border-radius: 16px;
            }
        }
    }
}
</style>