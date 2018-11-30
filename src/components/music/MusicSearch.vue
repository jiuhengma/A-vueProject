<template>
    <div class="music-search">
        <!-- 搜索框 -->
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." v-model="keywords" @keyup.13="Search">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="Search" >Go!</button>
            </span>
        </div>

        <div class="container">
            <div class="flex-item" v-for="item in musicslist" :key="item.songid">
                <img :src="item.pic" alt="">
                <p>
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
        }
    }
}
</script>

<style lang="scss" scoped>

.music-search{
    
    height: 100%;
    .input-group{
        display: flex;
        margin-top: 10px;
        padding: 5px;
        position: fixed;
        margin-left: 55px;

        .input-group-btn{

            .btn{
                height: 40px;
                box-shadow: 4px 4px 7px #c8c8c8;
            }
            .btn:visited{
                opacity: 0.4;
            }
            .btn:hover {color: #408080}

            
        }
    }

    .container {
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
        img{
            width: 100%;
        }
        p{
            background-color: #e8e8e8;
            margin-bottom: 0;
        }
    }
    

}
</style>
