<template>
    <div>
        <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>首页</tab-item>
            <tab-item>产品中心</tab-item>
            <tab-item>联系方式</tab-item>
        </tab>
    </div>
</template>
<style>
    .vux-tab .vux-tab-item.vux-tab-selected {
        color: #00aaff !important;
    }

    .vux-tab-ink-bar {
        background-color: #00aaff !important;
    }
</style>
<script>
    import {Tab, TabItem} from 'vux'

    export default{
        data(){
            return {
                index01: 0
            }
        },
        methods: {
            switchTabItem(index){
                switch (index) {
                    case 0:
                        this.$router.push({name: 'mbindex'});
                        break;
                    case 1:
                        this.$router.push({name: 'mbproductCenter'});
                        break;
                    case 2:
                        this.$router.push({name: 'mbcontactPage'});
                        break;
                    default:
                }
                this.index01 = index;
            }
        },
        components: {Tab, TabItem}
    }
</script>
