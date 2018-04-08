<template>
    <i :class="classes" :style="styles"></i>
</template>

<script>
    export default {
        name: 'am-icon',
        props: {
            prefixCls: {
                type: String,
                default: () => 'am-icon'
            },
            icon: {
                type: String,
                require: true
            },
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
                return `${this.prefixCls} ${this.prefixCls}-${this.icon}`
            },
            styles () {
                let style = {}

                if (this.size) {
                    style['font-size'] = `${this.size}px`
                }

                if (this.color) {
                    style.color = this.color
                }

                return style
            }
        }

    }
</script>

<style lang="less">
    @import "./assets/ionicons";
</style>
