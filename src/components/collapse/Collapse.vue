<template>
    <div :class="collapseClassName">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        prefixCls: {
            type: String,
            default: 'am-collapse'
        },
        activeKey: [Array, String],
        defaultActiveKey: String,
        // TODO onChange 用$emit('change')代替
        accordion: Boolean
        // openAnimation 暂时不做
    },
    computed: {
        collapseClassName () {
            return this.prefixCls
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
