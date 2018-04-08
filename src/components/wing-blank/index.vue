<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'am-wingblank',
    props: {
        prefixCls: {
            type: String,
            default: () => 'am-wingblank'
        },
        size: {
            type: String,
            default: () => 'lg'
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
