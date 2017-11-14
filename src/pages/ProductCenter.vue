<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card style="margin: 15px">
                    <div slot="header" class="clearfix">
                        <span>萧萧预约小程序</span>
                    </div>
                    <div align="center">
                        <img :src="icon1" width="50%">
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card style="margin: 15px">
                    <div slot="header" class="clearfix">
                        <span>萧萧科技微信公众号</span>
                    </div>
                    <div align="center">
                        <img :src="icon2" width="50%">
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card style="margin: 15px;height: 308px">
                    <div slot="header" class="clearfix">
                        <span>主营业务</span>
                    </div>
                    <li style="color: gray">
                        微信公众账号开发。
                    </li>
                    <br/>
                    <li style="color: gray">
                        微信小程序开发。
                    </li>
                    <br/>
                    <li style="color: gray">
                        web网页/后台开发。
                    </li>
                    <br/>
                    <li style="color: gray">
                        游戏马甲制作。
                    </li>
                    <br/>
                    <li style="color: gray">
                        提供互联网相关产品的技术咨询，技术支持。
                    </li>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>
<style>
</style>
<script>
    import icon1 from '../assets/images/xxyy.jpg'
    import icon2 from '../assets/images/xiaoxiaogongzhonghao.jpg'
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
