import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve) => { require(['./index.vue'], resolve) }
const Flex = (resolve) => { require(['../components/flex/demo/index.vue'], resolve) }
const List = (resolve) => { require(['../components/list/demo/index.vue'], resolve) }
const WhiteSpace = (resolve) => { require(['../components/white-space/demo/index.vue'], resolve) }

Vue.use(Router)

export default new Router({
    routes: [{
        name: 'index',
        path: '/',
        component: Index
    }, {
        name: 'flex',
        path: '/flex',
        component: Flex
    }, {
        name: 'list',
        path: '/list',
        component: List
    }, {
        name: 'whiteSpace',
        path: '/whiteSpace',
        component: WhiteSpace
    }],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
