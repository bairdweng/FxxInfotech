/**
 * Created by baird on 2016/12/30.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import comm from './modules/comm';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        comm,
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
});
export default store
