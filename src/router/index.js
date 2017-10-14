import Vue from 'vue'
import Router from 'vue-router'

const List = (resolve) => {require(['../components/list/demo/index.vue'], resolve)}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'list',
            component: List
        }
    ]
})
