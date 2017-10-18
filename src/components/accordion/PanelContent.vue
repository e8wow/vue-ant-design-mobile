<template>
    <div :class="contentCls" role="tabpanel">
        <div :class="`${this.prefixCls}-content-box`">
            <slot v-if="!(!isActive && destroyInactivePanel)"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prefixCls: {
            type: String,
            default: 'am-accordion'
        },
        isActive: Boolean,
        destroyInactivePanel: Boolean
    },
    computed: {
        contentCls () {
            return [
                {[`${this.prefixCls}-content`]: true},
                {[`${this.prefixCls}-content-active`]: this.isActive},
                {[`${this.prefixCls}-content-inactive`]: !this.isActive}
            ]
        }
    }
}
</script>
