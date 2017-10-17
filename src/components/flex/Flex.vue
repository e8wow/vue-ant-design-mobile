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
                {[`${this.prefixCls}-dir-row`]: this.direction === 'row'},
                {[`${this.prefixCls}-dir-row-reverse`]: this.direction === 'row-reverse'},
                {[`${this.prefixCls}-dir-column`]: this.direction === 'column'},
                {[`${this.prefixCls}-dir-column-reverse`]: this.direction === 'column-reverse'},

                {[`${this.prefixCls}-nowrap`]: this.wrap === 'nowrap'},
                {[`${this.prefixCls}-wrap`]: this.wrap === 'wrap'},
                {[`${this.prefixCls}-wrap-reverse`]: this.wrap === 'wrap-reverse'},

                {[`${this.prefixCls}-justify-start`]: this.justify === 'start'},
                {[`${this.prefixCls}-justify-end`]: this.justify === 'end'},
                {[`${this.prefixCls}-justify-center`]: this.justify === 'center'},
                {[`${this.prefixCls}-justify-between`]: this.justify === 'between'},
                {[`${this.prefixCls}-justify-around`]: this.justify === 'around'},

                {[`${this.prefixCls}-align-start`]: this.align === 'start'},
                {[`${this.prefixCls}-align-center`]: this.align === 'center'},
                {[`${this.prefixCls}-align-end`]: this.align === 'end'},
                {[`${this.prefixCls}-align-baseline`]: this.align === 'baseline'},
                {[`${this.prefixCls}-align-stretch`]: this.align === 'stretch'},

                {[`${this.prefixCls}-align-content-start`]: this.alignContent === 'start'},
                {[`${this.prefixCls}-align-content-end`]: this.alignContent === 'end'},
                {[`${this.prefixCls}-align-content-center`]: this.alignContent === 'center'},
                {[`${this.prefixCls}-align-content-between`]: this.alignContent === 'between'},
                {[`${this.prefixCls}-align-content-around`]: this.alignContent === 'around'},
                {[`${this.prefixCls}-align-content-stretch`]: this.alignContent === 'stretch'}
            ]
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
