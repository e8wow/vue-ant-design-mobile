<template>
    <div :class="wrapCls"></div>
</template>

<script>
export default {
    name: 'am-whitespace',
    props: {
        prefixCls: {
            type: String,
            default: () => 'am-whitespace'
        },
        size: {
            type: String,
            default: () => 'md'
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
