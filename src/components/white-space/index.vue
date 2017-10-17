<template>
    <div :class="wrapCls"></div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md'
        }
    },
    computed: {
        wrapCls () {
            return [
                this.prefixCls,
                `${this.prefixCls}-${this.size}`
            ]
        }
    },
    data () {
        return {
            prefixCls: 'am-whitespace'
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
