<template>
    <div class="picture-list">
        <div class="picture-item" v-for="item in pictureslist" :key="item.createdAT">
            <div class="img">
                <img :src="item.url" alt="">
            </div>
            <p>
                <span class="time">上传时间：</span>
                <span class="time">{{ item.publishedAt | dateFormat }}</span>
            </p>
        </div>

        <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            pictureslist:[],// 挂载图片
            page: 1
        }
    },
    created(){
        this.getPictureList();
    },
    methods:{
        getPictureList(){
            this.$http.get("https://www.apiopen.top/meituApi?page" + this.page).then(res => {
                // console.log(res.body);
                if(res.body.code === 200){
                    // 点击加载更多 拼接下页数据到第一页
                    this.pictureslist = this.pictureslist.concat(res.body.data);
                }else{
                    Toast('获取图片失败！')
                }
            })
        },
        getMore(){
            this.page++;
            this.getPictureList();
        }
    }

}
</script>

<style lang="scss" scoped>
.picture-list{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;

    .picture-item{
        width: 49%;
        border: 1px solid #000;
        box-shadow: 5px 5px 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .img{
            height: 230px;

            img{
            width: 100%;
            height: 100%;
        }
        }

        
        p{
            margin: 1px 4px -1px;
            background-color: #eee;
            display: flex;
            justify-content: center;
            .time{
                font-size: 11px;

            }
        }
    }
}
</style>
