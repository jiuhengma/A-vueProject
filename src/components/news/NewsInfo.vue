<template>
    <div class="newsinfo-continer">
        <h3 class="title">{{ newsinfo[0].title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo[0].ptime }}</span>
            <span>发表机关：{{ newsinfo[0].source}}</span>
        </p>

        <hr>

        <div class="content" v-html="newsinfo[0].link"></div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return {
            id: this.$route.params.docid ,// 将地址中传递过来的 docid值 挂载到 data 上 方便以后调用
            newsinfo:[] // 新闻对象
        };
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            // 获取新闻详情
            this.$http.get('https://www.apiopen.top/journalismApi').then(res => {
                // console.log(res.body);
                if(res.body.code === 200){
                    this.newsinfo = res.body.data.toutiao;
                }else{
                    Toast('获取数据失败！')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>// 如果内容区有图片加载大小有误 可以尝试去掉 scopoed
.newsinfo-continer{
    padding: 0 4px;
    .title{
        font-size:16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }

    .subtitle{
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }

    .content{
        img{
            width: 100%
        }
    }
}
</style>
