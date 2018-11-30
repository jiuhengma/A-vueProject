<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
                <router-link :to="'/home/newsinfo/' + item.docid">
                    <img class="mui-media-object mui-pull-left" :src="item.picInfo[0]">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.ptime }}</span>
                            <span>发表机关：{{ item.source }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            newslist:[]
        }
    },
    created(){
        this.getNewslist();
    },
    methods:{
        getNewslist(){
            // 获取新闻列表 api https://www.apiopen.top/journalismApi 可用
            this.$axios.get("https://www.apiopen.top/journalismApi").then(res=>{
                // console.log(res.data);
                if(res.data.code === 200){
                    this.newslist = res.data.data.toutiao;
                }else{
                    Toast('获取失败！')
                }

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow : ellipsis;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }

        .mui-media-object{
            width: 100%;
        }
    }
}
</style>
