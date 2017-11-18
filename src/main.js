import Vue from 'vue'
import router from './router/routes'
import './less/FxxdefaultStyle.css'
import './less/mobile.less'
import {Menu, MenuItem, Row, Col, Card} from 'element-ui'
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
const myapp = new Vue({
    router
}).$mount('#myapp')



