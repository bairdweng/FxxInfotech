export default {
    methods:{
        reloadData:function () {
            this.$store.commit('COMM_CONF',{
                title:'当前就诊：',
                content:'--'
            });
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm =>{
            vm.reloadData();
        });
    }
}
