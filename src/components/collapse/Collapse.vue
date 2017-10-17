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
        input: [Array, String], // 激活的keys
        defaultActiveKey: String,
        // TODO onChange 用$emit('change')代替
        accordion: Boolean
        // openAnimation 暂时不做
    },
    data () {
        return {
            activeKeys: typeof this.input === 'string' ? [this.input] : this.input
        }
    },
    computed: {
        collapseClassName () {
            return this.prefixCls
        }
    },
    methods: {
        itemClick (k) {
            console.log(k)
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
