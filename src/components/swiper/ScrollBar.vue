<template>
    <div :class="scrollBarCls"></div>
</template>

<script>
export default {
    name: 'am-swiper-slide',
    props: {
        hide: {// 滚动条是否自动隐藏。默认：true会自动隐藏。
            type: Boolean,
            default: true
        },
        drag: Boolean, // 该参数设置为true时允许拖动滚动条。
        snap: Boolean // 如果设置为true，释放滚动条时slide自动贴合。
    },
    computed: {
        scrollBarCls () {
            return [
                'swiper-scrollbar',
                `${this.$parent.prefixCls}-scrollbar`
            ]
        }
    }
}
</script>
