<template>
    <div>
        <el-card style="margin: 10px">
            <div slot="header" class="clearfix">
                <span>电话</span>
            </div>
            <li style="color: gray" class="card-content">
                翁：13660641950
            </li>
            <br/>
            <br/>
        </el-card>
        <el-card style="margin: 10px">
            <div slot="header" class="clearfix">
                <span>QQ</span>
            </div>
            <li style="color: gray" class="card-content">
                1257170362
            </li>
            <br/>
            <br/>
        </el-card>
        <el-card style="margin: 10px">
            <div slot="header" class="clearfix">
                <span>邮箱及地址</span>
            </div>
            <li style="color: gray" class="card-content">
                fxxinfotech@xggserve.com
            </li>
            <br/>
            <li style="color: gray" class="card-content">广州市南沙区丰泽东路106号（自编1号楼）X1301-F2010
            </li>
        </el-card>
    </div>
</template>
<style>
    .card-content {
        color: gray;
        font-size: 14px;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
