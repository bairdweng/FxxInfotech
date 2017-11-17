/**
 * Created by baird on 2016/12/30.
 */
/*
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)


const MbApp = resolve => require(['../pages/mobile/MbApp.vue'], resolve)
const MBMianIndex = resolve => require(['../pages/mobile/MBMainIndex.vue'], resolve)
const MBProductCenter = resolve => require(['../pages/mobile/MBProductCenter.vue'], resolve)
const MBContactPage = resolve => require(['../pages/mobile/MBContactPage.vue'], resolve)

const DesktopApp = resolve => require(['../pages/desktop/DesktopApp.vue'], resolve)
const MianIndex = resolve => require(['../pages/desktop/MainIndex.vue'], resolve)
const ProductCenter = resolve => require(['../pages/desktop/ProductCenter.vue'], resolve)
const ContactPage = resolve => require(['../pages/desktop/ContactPage.vue'], resolve)
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
            {
                path: 'desktop',
                component: DesktopApp,
                meta: {keepAlive: true},
                name: 'DesktopApp',
                children: [
                    {path: '/index', component: MianIndex, meta: {keepAlive: true}, name: 'dkindex'},
                    {path: 'productcenter', component: ProductCenter, meta: {keepAlive: true}, name: 'productCenter'},
                    {path: 'contactpage', component: ContactPage, meta: {keepAlive: true}, name: 'contactPage'}
                ]
            },
            {
                path: 'mobile',
                component: MbApp,
                meta: {keepAlive: true},
                name: 'MbApp',
                children: [
                    {path: 'index', component: MBMianIndex, meta: {keepAlive: true}, name: 'mbindex'},
                    {path: 'productcenter',component: MBProductCenter,meta: {keepAlive: true}, name: 'mbproductCenter'},
                    {path: 'contactpage', component: MBContactPage, meta: {keepAlive: true}, name: 'mbcontactPage'}
                ]
            },
        ]
    }
];
const router = new VueRouter({
    routes
})
export  default router
