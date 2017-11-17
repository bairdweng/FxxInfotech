<template>
    <div class="mainIndex">
        <el-row style="padding-top: 50px;padding-bottom: 70px;background-color: rgba(0,170,255,1);">
            <el-col :span="8">
                <div style="text-align: center;padding: 10px">
                    <img class="imageStyle" :src="xiaoguo1">
                </div>
            </el-col>
            <el-col :span="8">
                <div style="text-align: center;padding: 10px">
                    <img class="imageStyle" :src="xiaoguo2">
                </div>
            </el-col>
            <el-col :span="8">
                <div style="text-align: center;padding: 10px">
                    <img class="imageStyle" :src="xiaoguo3">
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="8">
                <el-card class="cardStyle">
                    <div slot="header" class="clearfix">
                        <span>萧萧科技简介</span>
                    </div>
                    <p style="color: gray" class="card-content">
                        萧萧科技成立于2016年2月，是目前中国领先的互联网增值服务提供商之一。成立2多年来，萧萧科技一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2016年2月1日，广州风萧萧信息科技有限公司在广州正式开始运营。</p>

                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="cardStyle">
                    <div slot="header" class="clearfix">
                        <span>公司愿景</span>
                    </div>
                    <p style="color: gray" class="card-content">
                        成为最受尊敬的互联网企业是萧萧科技的愿景目标。萧萧科技一直积极参与公益事业、努力承担企业社会责任、推动网络文明。萧萧科技的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态</p>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="cardStyle">
                    <div slot="header" class="clearfix">
                        <span>管理理念</span>
                    </div>
                    <li style="color: gray " class="card-content">
                        为员工提供良好的工作环境和激励机制
                    </li>
                    <br/>
                    <li style="color: gray" class="card-content">
                        完善员工培养体系和职业发展通道，使员工与企业同步成长
                    </li>
                    <br/>
                    <li style="color: gray;margin-bottom: 24px" class="card-content">
                        充分尊重和信任员工，不断引导和鼓励，使其获得成就的喜
                    </li>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .mainIndex .imageStyle {
        width: 100%;
        height: 25vw;
        border-radius: 5px;
        border-color: rgba(169, 169, 169, 0.47);
        box-shadow: 1px 1px 10px #ffffff;
    }

    .card-content {
        color: gray;
        font-size: 14px;
    }

    .el-menu--horizontal {
        border: none;
    }

    .mainIndex .cardStyle {
        height: 250px;
        margin: 15px;
    }

</style>
<script>
    import xiaoguo1 from '../../assets/images/xiaoguo3.jpg'
    import xiaoguo2 from '../../assets/images/xiaoguo2.jpg'
    import xiaoguo3 from '../../assets/images/xiaoguo1.jpg'

    export default{
        data(){
            return {
                xiaoguo1: xiaoguo1,
                xiaoguo2: xiaoguo2,
                xiaoguo3: xiaoguo3
            }
        }
    }
</script>
