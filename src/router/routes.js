/**
 * Created by baird on 2016/12/30.
 */
/*
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const MianIndex = resolve => require(['../pages/MainIndex'], resolve)
const ProductCenter = resolve => require(['../pages/ProductCenter'], resolve)
const ContactPage = resolve => require(['../pages/ContactPage'], resolve)

//路由配置
/**
 * meta 配置
 *  keepAlive true  页面 keepAlive
 *  requiresAuth:  验证是否需要登录   meta: {requiresAuth: true}
 * @type {[*]}
 */
/*发布版本时，虚拟主机根目录下的子目录路径。
 */
const routes = [
    {
        path: '/',
        component: App,
        meta: {keepAlive: true},
        name: 'App',
        children: [
            {path: '', component: MianIndex, meta: {keepAlive: true}, name: 'index'},
            {path: 'productcenter', component: ProductCenter, meta: {keepAlive: true}, name: 'productCenter'},
            {path: 'contactpage', component: ContactPage, meta: {keepAlive: true}, name: 'contactPage'},
        ]
    },
];
const router = new VueRouter({
    routes
})
export  default router
