<template>
    <div class="movies-info">
        <div class="up">
            <p class="title">{{ moviesinfo.title }} <span>({{ moviesinfo.year }})</span></p>
            <div class="tu">
                <p class="img"><img :src="moviesinfo.images.small" alt=""></p>
                <div class="name">
                    <p>导演：{{ moviesinfo.directors[0].name }}</p>
                    <p>编剧：{{ moviesinfo.writers[0].name }}/{{ moviesinfo.writers[1].name }}</p>
                    <p>主演：{{ moviesinfo.casts[0].name }}/{{ moviesinfo.casts[1].name }}/{{ moviesinfo.casts[2].name }}</p>
                    <p>类型：{{ moviesinfo.genres[0] }}/{{ moviesinfo.genres[1] }}</p>
                    <p>制片国家/地区：{{ moviesinfo.countries[0] }}</p>
                    <p>语言：{{ moviesinfo.languages[0] }}/{{ moviesinfo.languages[1] }}/{{ moviesinfo.languages[2] }}</p>
                    <p>上映时间：{{ moviesinfo.pubdate }}</p>
                    <p>片长：{{ moviesinfo.durations[0]}}</p>
                </div>
            </div>
            
        </div>
        <div class="info">
            <p class="info-title">{{ moviesinfo.title }}的剧情简介...</p>
            <div class="present">{{ moviesinfo.summary }}</div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            id: this.$route.params.id,
            moviesinfo:[],
        }
    },
    created(){
        this.getmoviesinfo();
    },
    methods:{
        getmoviesinfo(){
            this.$axios.get('/moviesapi/v2/movie/subject/' + this.id ).then((res) => {
                // console.log(res.data);
                // console.log(res.data.year)
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
                width: 45%
            }
            img{
                width: 100%;
                height: 100%;
            }

            .name{
                width: 53%;

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
