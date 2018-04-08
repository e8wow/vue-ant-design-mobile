<template>
    <div @touchstart="handlerTouchStart" @touchend="handlerTouchEnd" @click="handlerClick" :class="buttonClassName"
         :style="buttonStyles">
        <am-icon v-if="loading" class="am-rotate" icon="load-a"/>
        <am-icon v-if="!$slots.icon && icon && !loading" :icon="icon"/>
        <slot name="icon"></slot>
        <slot></slot>
    </div>
</template>

<script>
    import icon from '../icon'

    const typeList = ['default', 'primary', 'ghost', 'warning']
    export default {
        name: 'am-button',
        components: {
            [icon.name]: icon
        },
        props: {
            prefixCls: {
                type: String,
                default: () => 'am-button'
            },
            size: {
                type: String,
                default: () => 'large'
            },
            type: {
                type: String,
                default: () => 'default'
            },
            inline: Boolean,
            disabled: Boolean,
            loading: Boolean,
            icon: String,
            activeStyle: { // 激活样式
                type: Object,
                default: () => { return {} }
            },
            activeClass: {
                type: String,
                default: () => 'am-button-active'
            }
        },
        data () {
            return {
                active: false
            }
        },
        computed: {
            buttonClassName () {
                return [
                    this.prefixCls,
                    {[`${this.prefixCls}-small`]: this.size === 'small'},
                    {[`${this.prefixCls}-${this.type}`]: typeList.includes(this.type)},
                    {[`${this.prefixCls}-inline`]: this.inline},
                    {[`${this.prefixCls}-disabled`]: this.disabled},
                    {[`${this.prefixCls}-loading`]: this.loading},
                    {[this.activeClass]: this.active}
                ]
            },
            buttonStyles () {
                if (this.active) {
                    return this.activeStyle
                }
            }
        },
        methods: {
            handlerClick ($event) {
                this.$emit('click', $event)
            },
            handlerTouchStart () {
                this.active = true
            },
            handlerTouchEnd () {
                this.active = false
            }
        }
    }
</script>

<style lang="less">
    @import "./style/index";
</style>
