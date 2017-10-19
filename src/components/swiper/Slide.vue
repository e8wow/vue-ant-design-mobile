<template>
    <div :class="slideCls">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'am-swiper-slide',
    computed: {
        prefixCls () {
            return this.$parent.prefixCls
        },
        slideCls () {
            return [
                'swiper-slide',
                `${this.prefixCls}-slide`
            ]
        }
    }
}
</script>
