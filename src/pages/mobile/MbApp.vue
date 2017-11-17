<template>
    <div>
        <MbHeader></MbHeader>
        <router-view></router-view>
    </div>
</template>
<style>
</style>
<script>
    import MbHeader from '../../components/Header/MbHeader.vue'
    export default{
        data(){
            return {}
        },
        mounted(){

        },
        methods: {},
        components: {MbHeader}
    }
</script>
