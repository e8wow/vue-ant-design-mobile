<template>
    <div :class="wrapCls">
        <div :class="prevCls"></div>
        <div :class="nextCls"></div>
    </div>
</template>

<script>
export default {
    computed: {
        wrapCls () {
            return [
                `${this.$parent.prefixCls}-navigation`
            ]
        },
        prevCls () {
            return [
                'swiper-button-prev',
                `${this.$parent.prefixCls}-button-prev`
            ]
        },
        nextCls () {
            return [
                'swiper-button-next',
                `${this.$parent.prefixCls}-button-next`
            ]
        }
    }
}
</script>
