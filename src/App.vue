<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadRouter();
            });
        },
        data(){
            return {}
        },
        mounted(){
            this.reloadRouter();
        },
        methods: {
            reloadRouter(){
                if (navigator.platform.indexOf('Mac') !== -1 || navigator.platform.indexOf('Win') !== -1) {
                    if (window.innerWidth < 1000) {
                        this.$router.replace({name: 'mbindex'});
                    }
                    else {
                        this.$router.replace({name: 'dkindex'});
                    }
                }
                else {
                    this.$router.replace({name: 'mbindex'});
                }
            }
        }
    }
</script>


