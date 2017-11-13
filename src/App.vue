<template>
    <div>
        <FYHeader></FYHeader>
        <router-view></router-view>
        <FYFooter></FYFooter>
    </div>
</template>
<script>
    import FYHeader from './components/Header/Header.vue'
    import FYFooter from './components/Footer/Footer.vue'
    export default {
        components: {FYHeader, FYFooter},
        data(){
            return {}
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {}
    }
</script>


