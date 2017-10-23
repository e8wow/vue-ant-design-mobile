import Vue from 'vue'
import Router from 'vue-router'

import demo from './demo/index'

Vue.use(Router)

export default new Router({
    routes: [demo],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
