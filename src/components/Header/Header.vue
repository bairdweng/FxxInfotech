<template>
    <div style="position: relative;width: 100%" class="fxxheader">
        <el-menu :default-active="activeIndex"
                 class="el-menu"
                 :style="note"
                 mode="horizontal"
                 @select="handleSelect"
                 text-color="#fff"
                 active-text-color="#F1FC09">
            <el-menu-item index="3">联系方式</el-menu-item>
            <el-menu-item index="2">产品中心</el-menu-item>
            <el-menu-item index="1">首页</el-menu-item>
            <div style="padding-left: 15px;position: absolute;"><a
                    style="text-decoration: none;
                    font-size: 1.8rem;
                    color: white;
                    line-height:60px;
                    height: 60px;"
                    href="https://www.xggserve.com">
                萧萧科技
            </a></div>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                note: {
                    backgroundImage: "url(" + require("../../assets/images/fxxbackgroundImage.jpg") + ")"
                }
            };
        },
        methods: {
            handleSelect(index) {
                switch (index) {
                    case '1':
                        this.$router.push({name: 'dkindex'});
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

    .is-active {
        background-color: #00CDAC !important;
        /*color: white;*/
    }

    li.el-menu-item:hover {
        background-color: #00CDAC !important;
    }
</style>
