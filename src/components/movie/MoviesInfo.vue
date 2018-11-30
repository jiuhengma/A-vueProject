<template>
    <div class="movies-info">
        <div class="up">
            <p class="title">邪不压正 <span>(2018)</span></p>
            <div class="tu">
                <p class="img"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.jpg" alt=""></p>
                <div class="name">
                    <p>导演：姜文</p>
                    <p>编剧：姜文/李菲</p>
                    <p>主演：彭于晏/廖凡/姜文</p>
                    <p>类型：剧情/喜剧/动作</p>
                    <p>制片国家/地区：中国大陆</p>
                    <p>语言：汉语普通话/英语/日语</p>
                    <p>上映时间：2018-07-13(中国大陆)</p>
                    <p>片长：137分钟</p>
                </div>
            </div>
            
        </div>
        <div class="info">
            <p class="info-title">邪不压正的剧情简介...</p>
            <div class="present">七七事变前夕，华裔青年小亨德勒（彭于晏 饰）从美国远赴重洋，回到阔别十数年之久的北平从医。然而他真正的名字叫李天然，十三岁那年曾亲眼目睹师父一家遭师兄朱潜龙（廖凡 饰）和日本人根本一郎（泽田谦也 饰）灭门。侥幸逃生的天然被美国人亨德勒医生送往大洋彼岸，接受了极其严苛的训练，而今他怀着绝密的任务踏上故土。亨德勒父子租住神秘男子蓝青峰（姜文 饰）的宅子，蓝是当年辛亥革命的参与者，他与现为警察局长的朱潜龙过从甚密，却又以杀死李天然为筹码，暗中怂恿朱除掉根本一郎。复仇心切的李天然寻找到了仇人，而亨德勒医生则全力阻止养子冒险。在这一过程中，交际花唐凤仪（许晴 饰）与裁缝关巧红（周韵 饰）也卷入了男人的勾心斗角的漩涡里。直到七七事变爆发，所有的矛盾迎来了决断的时刻…… </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            id: this.$route.params.id,
            moviesinfo:[]
        }
    },
    created(){
        this.getmoviesinfo();
    },
    methods:{
        getmoviesinfo(){
            this.$axios.get('https://douban.uieee.com/v2/movie/subject/' + this.id ).then(res => {
                // console.log(res.data);
                if(res.data.id !== 0){
                    this.moviesinfo = res.data;
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.movies-info{
    .up{
        .title{
        margin: 5px 0 0 0 ;
        padding-left: 4px;
        font-size: 18px;

        }

        .tu{
            display: flex;
            justify-content: space-between;
            padding: 3px;
            .img{
                width: 40%
            }
            img{
                width: 100%;
                height: 100%;
            }

            .name{
                width: 58%;

                p{
                color: #005b5b;
                text-shadow: 2px 4px 8px #9d9d9d;
                }
            }
        }
    }

    .info{
        margin-top: 8px;
        .info-title{
            text-align: center;
            font-size: 18px;
            color: #005b5b;
        }

        .present{
            font-size: 14px;
            padding: 0 7px;
            text-indent: 28px;
        }
    }
    
}
</style>
