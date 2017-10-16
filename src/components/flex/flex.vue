<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        align: {
            type: String,
            default: 'center'
        },
        alignContent: String,
        direction: String,
        wrap: String,
        justify: String
    },
    data () {
        return {
            prefixCls: 'am-flexbox'
        }
    },
    computed: {
        wrapCls () {
            return [
                this.prefixCls,

                {[`${this.prefixCls}-dir-row`]: direction === 'row'},
                {[`${this.prefixCls}-dir-row-reverse`]: direction === 'row-reverse'},
                {[`${this.prefixCls}-dir-column`]: direction === 'column'},
                {[`${this.prefixCls}-dir-column-reverse`]: direction === 'column-reverse'},

                {[`${this.prefixCls}-nowrap`]: wrap === 'nowrap'},
                {[`${this.prefixCls}-wrap`]: wrap === 'wrap'},
                {[`${this.prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse'},

                {[`${this.prefixCls}-justify-start`]: justify === 'start'},
                {[`${this.prefixCls}-justify-end`]: justify === 'end'},
                {[`${this.prefixCls}-justify-center`]: justify === 'center'},
                {[`${this.prefixCls}-justify-between`]: justify === 'between'},
                {[`${this.prefixCls}-justify-around`]: justify === 'around'},

                {[`${this.prefixCls}-align-start`]: align === 'start'},
                {[`${this.prefixCls}-align-center`]: align === 'center'},
                {[`${this.prefixCls}-align-end`]: align === 'end'},
                {[`${this.prefixCls}-align-baseline`]: align === 'baseline'},
                {[`${this.prefixCls}-align-stretch`]: align === 'stretch'},
                {[`${this.prefixCls}-align-content-start`]: alignContent === 'start'},
                {[`${this.prefixCls}-align-content-end`]: alignContent === 'end'},
                {[`${this.prefixCls}-align-content-center`]: alignContent === 'center'},
                {[`${this.prefixCls}-align-content-between`]: alignContent === 'between'},
                {[`${this.prefixCls}-align-content-around`]: alignContent === 'around'},
                {[`${this.prefixCls}-align-content-stretch`]: alignContent === 'stretch'}
            ]
        }
    }
}
</script>

<style lang="less">
    @import "style/index.less";
</style>
