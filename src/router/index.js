import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve) => { require(['./index.vue'], resolve) }
const List = (resolve) => { require(['../components/list/demo/index.vue'], resolve) }

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index
        },
        {
            name: 'list',
            path: '/list',
            component: List
        }
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
