<template>
    <div class="music-search">
        <!-- 搜索框 -->
        <div class="search">
            <input type="text" placeholder="Search for ..." v-model="keywords" @keyup.13="Search">
            <button @click="Search">搜索</button>
        </div>

        <!-- 搜索结果 -->
        <div class="container">
            <div class="flex-item" v-for="item in musicslist" :key="item.songid" @click="goDetail">
                <p class="img"><img :src="item.pic" alt=""></p>
                <p class="info">
                    <span class="author">{{ item.author }}</span>
                    <span class="songname">{{ item.title }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { Tosast } from "mint-ui";
export default{
    data(){
        return{
            keywords:[],
            musicslist:[]
        }
    },
    methods:{
        Search(){
            this.$axios.get("https://api.apiopen.top/searchMusic?name=" + this.keywords).then(res => {
                // console.log(res.data);
                if(res.data.code === 200){
                    this.musicslist = res.data.result;
                }
            })
            // console.log(this.keywords);
        },
        goDetail(id){
            console.log(this);
            this.$router.push('/home/musicinfo/' + id)
        }
    }
}
</script>

<style lang="scss" scoped>

.music-search{
    padding: 5px;
    height: 100%;
    
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

    .container {
        margin-top: -15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 5px;
    }

    .flex-item {
        border: 1px solid #000;
        box-shadow: 0 0 8px #7abcbc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 49%;
        margin-top: 5px;

        .img{
            height: 180px;
            padding: 2px;
        }
        img{
            width: 100%;
            height: 100%;
        }
        .info{
            background-color: #e8e8e8;
            margin-bottom: 0;
            font-size: 14px;
            padding: 0 2px;
            display: flex;
            // justify-content: space-around;
            // -webkit-justify-content: space-around;
            overflow : hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
           
            .author{
                color: #408080;
                font-weight: 600;
                font-size: 12px;
                margin-right: 3px;
            }
             
            .songname{
                text-overflow:ellipsis;
                color: #5f3030;
                font-weight: 500;
            }
        }
    }
    

}
</style>
