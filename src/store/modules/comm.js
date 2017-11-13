/**
 * Created by baird on 2016/12/30.
 */
import * as types from '../mutation';
import SessionStorge from 'service/sdSessionStorge'
const state = {
    ShowMenu: true,
    BaseInfo: {
        schoolinfo: {}
    }
};
const getters = {
    baseinfo: state => {
        if(!state.BaseInfo.schoolinfo.name){
            return SessionStorge.getBaseInfo();
        }
        return state.BaseInfo
    },
    showMenu: state => {
        return state.ShowMenu
    }
};
const mutations = {
    [types.COMM_CONF](state, settings){
        state = Object.assign(state, settings);
    }
};
export default {
    state,
    getters,
    mutations
}
