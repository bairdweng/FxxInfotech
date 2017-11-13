<template>
    <div style="position: relative;width: 100%" class="fxxheader">
        <el-menu :default-active="activeIndex"
                 class="el-menu"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#00aaff"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item index="3">联系方式</el-menu-item>
            <el-menu-item index="2">产品中心</el-menu-item>
            <el-menu-item index="1">首页</el-menu-item>
            <div style="padding-left: 15px;position: absolute;line-height:60px;height: 60px;font-size: 2rem;color: white">萧萧科技</div>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(index) {
                switch (index) {
                    case '1':
                        this.$router.push({name: 'index'});
                        break;
                    case '2':
                        this.$router.push({name: 'productCenter'});
                        break;
                    case '3':
                        this.$router.push({name: 'contactPage'});
                        break;
                    default:
                }
            }
        }
    }
</script>
<style>
    .fxxheader .el-menu--horizontal .el-menu-item {
        float: right;
        font-size: 1em;
    }
</style>
