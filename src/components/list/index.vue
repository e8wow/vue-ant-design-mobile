<template>
    <div :class="prefixCls">
        <div v-if="renderHeader||$slots.header" :class="`${prefixCls}-header`">
            {{renderHeader}}
            <slot v-if="$slots.header" name="header"></slot>
        </div>
        <div :class="`${prefixCls}-body`">
            <slot></slot>
        </div>
        <div v-if="renderFooter||$slots.footer" :class="`${prefixCls}-footer`">
            {{renderFooter}}
            <slot v-if="$slots.footer" name="footer"></slot>
        </div>
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
