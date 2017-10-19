<template>
    <div :class="containerCls" style="height:100%">
        <div :class="wrapCls">
            <slot></slot>
        </div>
        <div v-if="scrollbar" :class="scrollBarCls"></div>
        <div :class="paginationCls"></div>
    </div>
</template>

<script>
import Swiper from '../../../static/swiper/swiper.custom.min'

export default {
    name: 'am-swiper',
    props: {
        model: {
            prop: 'index',
            event: 'change'
        },
        prefixCls: {
            type: String,
            default: 'am-swiper'
        },
        initialSlide: Number, // 初始索引
        direction: String, // 滑动方向
        speed: Number, // 速度,
        autoplay: Number, // 自动播放
        autoplayDisableOnInteraction: {// 滑动后取消自动播放
            type: Boolean,
            default: true
        },
        autoplayStopOnLast: Boolean, // 自动播放到最后一个时停止自动播放
        parallax: Boolean, // 是否开启视差滚动
        setWrapperSize: { // Swiper从3.0开始使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
            type: Boolean,
            default: true
        },
        virtualTranslate: Boolean, // 虚拟位移。当你启用这个参数，Swiper除了不会移动外其他的都像平时一样运行，仅仅是不会在Wrapper上设置位移。当你想自定义一些slide切换效果时可以用。
        width: Number, // 强制Swiper的宽度
        height: Number, // 强制Swiper的高度
        roundLengths: Boolean, // 计算宽高等结果取整
        breakpoints: Object, // 断点设定：根据屏幕宽度设置某参数为不同的值，类似于响应式布局的media screen。
        autoHeight: Boolean, // 高度自适应
        nested: Boolean, // 用于嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换。

        scrollbar: Boolean, // 是否开启scrollBar
        scrollbarHide: {// 滚动条是否自动隐藏。默认：true会自动隐藏。
            type: Boolean,
            default: true
        },
        scrollbarDraggable: Boolean, // 该参数设置为true时允许拖动滚动条。
        scrollbarSnapOnRelease: Boolean, // 如果设置为true，释放滚动条时slide自动贴合。

        pagination: Boolean // 是否开启分页器
    },
    data () {
        return {swiper: null}
    },
    computed: {
        containerCls () {
            return [
                'swiper-container',
                this.prefixCls
            ]
        },
        wrapCls () {
            return [
                'swiper-wrapper',
                `${this.prefixCls}-wrapper`
            ]
        },
        scrollBarCls () {
            return [
                'swiper-scrollbar',
                `${this.prefixCls}-scrollbar`
            ]
        },
        paginationCls () {
            return [
                'swiper-pagination',
                `${this.prefixCls}-pagination`
            ]
        }
    },
    mounted () {
        this.$nextTick(() => { // 确保所有子组件挂载完毕
            this.swiper = new Swiper(this.$el, {
                initialSlide: this.initialSlide,
                direction: this.direction,
                speed: this.speed,
                autoplay: this.autoplay,
                autoplayDisableOnInteraction: this.autoplayDisableOnInteraction,
                autoplayStopOnLast: this.autoplayStopOnLast,
                parallax: this.parallax,
                setWrapperSize: this.setWrapperSize,
                virtualTranslate: this.virtualTranslate,
                width: this.width,
                height: this.height,
                roundLengths: this.roundLengths,
                breakpoints: this.breakpoints,
                autoHeight: this.autoHeight,
                nested: this.nested,
                scrollbar: this.scrollbar ? '.swiper-scrollbar' : '',
                scrollbarHide: this.scrollbarHide,
                scrollbarDraggable: this.scrollbarDraggable,
                scrollbarSnapOnRelease: this.scrollbarSnapOnRelease,
                pagination: this.pagination ? '.swiper-pagination' : ''
            })
        })
    }
}
</script>

<style>
    @import "../../../static/swiper/swiper.custom.min.css";
</style>
