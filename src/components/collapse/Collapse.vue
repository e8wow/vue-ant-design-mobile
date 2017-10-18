<template>
    <div :class="collapseClassName">
        <slot></slot>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'activeKey',
        event: 'change'
    },
    props: {
        prefixCls: {
            type: String,
            default: 'am-collapse'
        },
        activeKey: [Array, String], // 激活的keys
        defaultActiveKey: String,
        accordion: Boolean
        // openAnimation 暂时不做
    },
    data () {
        return {
            currentKeys: []
        }
    },
    computed: {
        collapseClassName () {
            return this.prefixCls
        }
    },
    created () {
        if (this.activeKey) {
            if (typeof this.activeKey === 'string') {
                this.currentKeys = [this.activeKey]
            } else if (this.accordion) {
                this.currentKeys = [this.activeKey[0]]
            } else {
                this.currentKeys = this.activeKey
                this.currentKeys.sort()
                this.currentKeys.forEach((k, i) => {
                    if (this.currentKeys.indexOf(k, i) >= 0) {
                        this.currentKeys.splice(i, 1)
                    }
                })
            }
        } else {
            this.currentKeys = [this.defaultActiveKey]
        }
    },
    methods: {
        itemClick (k) {
            let index = this.currentKeys.indexOf(k)
            if (this.accordion) {
                this.currentKeys = index >= 0 ? [] : [k]
            } else if (index >= 0) {
                this.currentKeys.splice(index, 1)
            } else {
                this.currentKeys.push(k)
            }
            this.$emit('change', this.currentKeys)
        }
    },
    watch: {
        currentKeys (currentKeys) {
            this.$children.forEach(child => {
                child.isActive = currentKeys.indexOf(child.k) >= 0
            })
        }
    }
}
</script>

<style lang="less">
    @import "./style/index.less";
</style>
