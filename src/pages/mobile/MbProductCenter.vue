<template>
    <div class="productcenter">
        <el-row>
            <el-card class="cardStyle">
                <div slot="header" class="clearfix">
                    <span>主营业务</span>
                </div>
                <li style="color: gray">计算机零配件零售。</li>
                <br/>
                <li style="color: gray">电子产品零售。</li>
                <br/>
                <!--<li style="color: gray">微信公众账号开发。</li>-->
                <!--<br/>-->
                <!--<li style="color: gray"> 微信小程序开发。</li>-->
                <!--<br/>-->
                <!--<li style="color: gray">web网页/后台开发。</li>-->
                <!--<br/>-->
                <!--<li style="color: gray"> H5游戏/手游开发。</li>-->
                <!--<br/>-->
                <!--<li style="color: gray">提供互联网周边产品的技术支持。</li>-->
            </el-card>
            <el-card class="cardStyle">
                <div slot="header" class="clearfix">
                    <span>萧萧预约小程序</span>
                </div>
                <div align="center">
                    <img :src="icon1" width="200px" height="200px">
                </div>
            </el-card>
            <el-card class="cardStyle">
                <div slot="header" class="clearfix">
                    <span>萧萧科技微信公众号</span>
                </div>
                <div align="center">
                    <img :src="icon2" width="200px" height="200px">
                </div>
            </el-card>
        </el-row>
    </div>
</template>
<style>
    .productcenter .cardStyle {
        height: 320px;
        margin: 10px;
    }
</style>
<script>
    import icon1 from '../../assets/images/xxyy.jpg'
    import icon2 from '../../assets/images/xiaoxiaogongzhonghao.jpg'
    export default{
        data(){
            return {
                icon1: icon1,
                icon2: icon2
            }
        },
        components: {}
    }
</script>
