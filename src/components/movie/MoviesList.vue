<template>
    <div class="movies-list">
        
        <div class="movies-item" v-for="item in movieslist" :key="item.id">
           <router-link :to="'/home/moviesinfo/' + item.id">
                <p style="width:100%; height:254px"><img :src="item.images.large" alt=""></p>
                <p class="title-average">
                    <span class="title">{{ item.title }}</span>
                    <span>评分：<span style="color:red; font-size:14px">{{ item.rating.average }}</span></span>
                </p>
                <div class="info">
                    <p class="director">导演：{{ item.directors[0].name }}</p>
                    <p class="type">类型：{{ item.genres[0] }} / {{ item.genres[1] }}</p>
                    <div class="time">
                        <span>影片时长：{{ item.durations[0] }}</span>
                        
                    </div>
                </div>
            </router-link> 
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            movieslist:[]
        };
    },
    created(){
        this.getMoviesList();
    },
    methods:{
        getMoviesList(){
            // api: https://douban.uieee.com/v2/movie/top250
            this.$axios.get('../../../static/top250.json').then(res => {
                // console.log(res.data);
                if(res.data.start === 0){
                    this.movieslist = res.data.subjects;
                }else{
                    Toast('获取失败！');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.movies-list{
    display: flex;
    flex-wrap: wrap; //換行
    padding: 7px;
    justify-content: space-between;

    .movies-item{
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 5px 5px 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img{
            width: 100%;
            height: 100%;
        }

        .title-average{
            margin-top: -5px;
            display: flex;
            justify-content: space-between;
            padding: 0 2px;
            .title{
                font-size: 13px;
                color: #285151;
                font-weight: 700;
            }
            span{
                font-size: 12px
            }
        }

        .info{
            background-color: #eee;
            text-align: left;
            margin-top: -10px;
            p{
                font-size: 12px;
                margin: 0;
            }
            .time{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #9c9c9c;
                :first-child{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }    

        }
    }
}
</style>
