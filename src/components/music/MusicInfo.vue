<template>
    <div class="musicinfo">
        <!-- <h3>音乐详情页</h3> -->
        <div class="music-item">
            <p class="image"><img src="http://5b0988e595225.cdn.sohucs.com/images/20171203/e5fdb463c8094e76b5520b665ba7a5a5.jpeg" alt=""></p>
            <p class="lrc"></p>
            <p class="foot">
                <button class="left">上一曲</button>
                <button class="enter">播放</button>
                <button class="right">下一曲</button>
            </p>

            
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        
    }
}
    
</script>

<style lang="scss" scoped>
.musicinfo{
    background-color: rgba(71, 141, 141, 0.15);
    overflow: hidden;
    .music-item{
        .image{
            width: 200px;
            height: 200px;
            margin: 5px auto;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .lrc{
            width: 80%;
            height: 300px;
            background-color: rgba(200, 154, 95, 0.2);
            border-radius: 10px;
            margin: auto;
        }

        .foot{
            margin-top: 30px;
            text-align: center;
        }
    }
}
</style>

