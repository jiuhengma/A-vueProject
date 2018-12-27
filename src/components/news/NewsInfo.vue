<template>
    <div class="newsinfo-continer">
        <h3 class="title"></h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>发表机关：</span>
        </p>

        <hr>

        <div class="content" ></div>
        
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return {
            id: this.$route.params.uniquekey ,// 将地址中传递过来的 docid值 挂载到 data 上 方便以后调用
            newsinfo:[] // 新闻对象
        };
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            // 获取新闻详情
            this.$axios.get('/newsapi/index?key=030199af1649b49b8da6bf2ca54d968e/' + this.id).then(res => {
                
                console.log(res.status);
                if(res.status === 200){
                    console.log(res.data);
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
