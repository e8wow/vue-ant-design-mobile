<template>
    <div :class="containerCls">
        <div :class="wrapperCls">
            <slot></slot>
        </div>

        <slot name="navigation"></slot>
        <slot name="scrollBar"></slot>
        <slot name="pagination"></slot>
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
        loop: Boolean,
        loopedSlides: {// 在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
            type: Number,
            default: 1
        }
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
        wrapperCls () {
            return [
                'swiper-wrapper',
                `${this.prefixCls}-wrapper`
            ]
        },
        scrollBarConfig () {
            const scrollBar = this.$slots.scrollBar
            return scrollBar ? {
                scrollbar: `.${this.prefixCls}-scrollbar`,
                scrollbarHide: scrollBar[0].componentInstance.hide,
                scrollbarDraggable: scrollBar[0].componentInstance.drag,
                scrollbarSnapOnRelease: scrollBar[0].componentInstance.snap
            } : {}
        },
        paginationConfig () {
            const pagination = this.$slots.pagination
            return pagination ? {
                pagination: `.${this.prefixCls}-pagination`,
                paginationType: pagination[0].componentInstance.type,
                paginationClickable: pagination[0].componentInstance.clickable,
                paginationHide: pagination[0].componentInstance.hide
            } : {}
        },
        navigationButtonConfig () {
            return this.$slots.navigation ? {
                prevButton: `.${this.prefixCls}-button-prev`,
                nextButton: `.${this.prefixCls}-button-next`
            } : {}
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
                loop: this.loop,
                loopAdditionalSlides: this.loopAdditionalSlides,
                loopedSlides: this.loopedSlides,

                ...this.scrollBarConfig,
                ...this.paginationConfig,
                ...this.navigationButtonConfig

            })
        })
    }
}
</script>

<style>
    @import "../../../static/swiper/swiper.custom.min.css";
</style>
