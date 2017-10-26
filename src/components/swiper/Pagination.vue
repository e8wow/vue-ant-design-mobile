<template>
    <div :class="paginationCls"></div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'bullets'
        },
        clickable: Boolean,
        hide: Boolean
    },
    computed: {
        paginationCls () {
            return [
                'swiper-pagination',
                `${this.$parent.prefixCls}-pagination`
            ]
        }
    }
}
</script>

<style lang="less">
    .am-swiper-pagination{
        .swiper-pagination-bullet-active{
            background-color: #888;
        }
    }
</style>
