<template>
    <div class="story-list">
        <div class="story-item" >
            <img src="http://img-tailor.11222.cn/bcv/big/201803131050382283.jpg" alt="">
            <p>
                <p class="title">春闺秘录：厂公太撩人</p>
                <p class="class_name">古典架空</p>
            </p>
        </div>

        
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            
        }
    },
    created(){
        this.getmovieslist();
    },
    methods:{
        getmovieslist(){
            this.$http.get("").then(res => {
                console.log(res.data);
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.story-list{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;

    .story-item{
        width: 49%;
        border: 1px solid #000;
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
        p{
            margin: 1px 4px;
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
