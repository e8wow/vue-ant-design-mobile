const DemoRouter = (resolve) => { require(['../../page/demo.vue'], resolve) }
const Index = (resolve) => { require(['../../page/demo/index.vue'], resolve) }

const Accordion = (resolve) => { require(['../../components/accordion/demo/index.vue'], resolve) }
const Button = (resolve) => { require(['../../components/button/demo/index.vue'], resolve) }
const Flex = (resolve) => { require(['../../components/flex/demo/index.vue'], resolve) }
const List = (resolve) => { require(['../../components/list/demo/index.vue'], resolve) }
const Swiper = (resolve) => { require(['../../components/swiper/demo/index.vue'], resolve) }
const WhiteSpace = (resolve) => { require(['../../components/white-space/demo/index.vue'], resolve) }
const WingBlank = (resolve) => { require(['../../components/wing-blank/demo/index.vue'], resolve) }

export default {
    path: '/demo',
    component: DemoRouter,
    children: [{
        path: '/',
        component: Index
    }, {
        path: 'accordion',
        component: Accordion
    }, {
        path: 'button',
        component: Button
    }, {
        path: 'flex',
        component: Flex
    }, {
        path: 'list',
        component: List
    }, {
        path: 'swiper',
        component: Swiper
    }, {
        path: 'whiteSpace',
        component: WhiteSpace
    }, {
        path: 'WingBlank',
        component: WingBlank
    }]
}
