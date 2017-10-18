<template>
    <div :class="itemCls">
        <div @click="itemClick" :class="headerCls" role="tab" :aria-expanded="isActive">
            <i v-if="showArrow" className="arrow"/>
            {{header}}
        </div>
        <panel-content :isActive="isActive">
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
            default: 'am-collapse'
        },
        k: String,
        header: String,
        showArrow: {
            type: Boolean,
            default: true
        },
        disabled: Boolean
    },
    data () {
        return {
            isActive: false
        }
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

<style>

</style>
