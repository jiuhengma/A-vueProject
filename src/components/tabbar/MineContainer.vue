<template>
    <div>
        
        <!--页面主内容区开始-->
        <!-- <div class="mui-page-content">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell mui-media">
                            <a class="mui-navigate-right" href="#account">
                                <img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
                                <div class="mui-media-body">
                                    Hello MUI
                                    <p class='mui-ellipsis'>账号:hellomui</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#account" class="mui-navigate-right">账号与安全</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#notifications" class="mui-navigate-right">新消息通知</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#privacy" class="mui-navigate-right">隐私</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#general" class="mui-navigate-right">通用</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
                        </li>
                    </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell" style="text-align: center;">
                            <a>退出登录</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->


        <form>
        用户名：<input type="text" name="username"><br>
        密码：<input type="password" name="password"><br>
        <a href="javascript:;" @click="submit">登陆</a>
        </form>
    </div>
</template>

<script>
export default{
    
}
</script>

<style lang="scss" scoped>
.mui-page-content{
    margin-top: 40px;
}
</style>