<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'lg'
        }
    },
    data () {
        return {
            prefixCls: 'am-wingblank'
        }
    },
    computed: {
        wrapCls () {
            return [
                this.prefixCls,
                `${this.prefixCls}-${this.size}`
            ]
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
