<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item><img src="../../images/lunbo/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/lunbo/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/lunbo/3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>

        <!-- 9宫格功能区 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img id="new" src="../../images/icon/new1.png">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/pictureslist">
                    <img id="photo" src="../../images/icon/photo1.png">
                    <div class="mui-media-body">美女图片</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/movieslist">
                    <img id="movie" src="../../images/icon/movie1.png">
                    <div class="mui-media-body">视频影音</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/musicsearch">
                    <img id="music" src="../../images/icon/music1.png">
                    <div class="mui-media-body">音乐搜索</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/hotstory">
                    <img id="book" src="../../images/icon/book1.png">
                    <div class="mui-media-body">热门小说</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img id="more" src="../../images/icon/more1.png">
                    <div class="mui-media-body">more</div></a></li>
        </ul> 
        

        
    </div>

</template>

<script>
    export default{
        data(){
            return{};
        },
        methods:{
            getLunbotu(){
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        &:nth-child(1){
            background-color: #ff8000;
        }
        &:nth-child(2){
            background-color: #0080c0;
        }
        &:nth-child(3){
            background-color: #00b95c;
        }
    }

    img{
        width: 100%;
        height: 100%;
            }
}

.mui-grid-view.mui-grid-9{
    background-color: #efeff4;
    border:none;
    img{
        width: 50px;
        height: 50px;
    }

    // TODO: 

    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>

