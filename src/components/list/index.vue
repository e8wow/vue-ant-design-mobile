<template>
    <div :class="prefixCls">
        <div v-if="renderHeader" :class="`${prefixCls}-header`">{{renderHeader}}</div>
        <div :class="`${prefixCls}-body`">
            <slot></slot>
        </div>
        <div v-if="renderFooter" :class="`${prefixCls}-footer`">{{renderFooter}}</div>
    </div>
</template>

<script>
export default {
    props: {
        renderHeader: String,
        renderFooter: String
    },
    data () {
        return {
            prefixCls: 'am-list'
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
