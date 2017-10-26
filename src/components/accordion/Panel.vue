<template>
    <div :class="itemCls">
        <div @click="itemClick" :class="headerCls" :aria-expanded="isActive">
            {{header}}
            <slot v-if="$slots.header" name="header"></slot>
            <i v-if="showArrow" class="arrow"></i>
        </div>
        <panel-content :prefixCls="prefixCls" :isActive="isActive">
            <slot></slot>
        </panel-content>
    </div>
</template>

<script>
import PanelContent from './PanelContent.vue'

export default {
    components: {PanelContent},
    props: {
        prefixCls: {
            type: String,
            default: 'am-accordion'
        },
        k: String,
        header: String,
        showArrow: {
            type: Boolean,
            default: true
        },
        disabled: Boolean
    },
    computed: {
        itemCls () {
            return [
                {[`${this.prefixCls}-item`]: true},
                {[`${this.prefixCls}-item-active`]: this.isActive},
                {[`${this.prefixCls}-item-disabled`]: this.disabled}
            ]
        },
        headerCls () {
            return [
                `${this.prefixCls}-header`
            ]
        },
        isActive () {
            return this.$parent.currentKeys.indexOf(this.k) >= 0
        }
    },
    methods: {
        itemClick () {
            if (!this.disabled) {
                this.$parent.itemClick(this.k)
            }
        }
    }
}
</script>
