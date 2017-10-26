<template>
    <div :class="contentCls">
        <div :class="`${this.prefixCls}-content-box`" ref="contentBox">
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
                {[`${this.prefixCls}-anim-active`]: this.$parent.$parent.openAnimation},
                {[`${this.prefixCls}-content-active`]: this.isActive},
                {[`${this.prefixCls}-content-inactive`]: !this.isActive}
            ]
        }
    },
    updated () {
        this.$el.style.height = this.isActive ? `${this.$refs.contentBox.offsetHeight}px` : '0px'
    },
    watch: {
        isActive (isActive) {
            this.$el.style.height = isActive ? `${this.$refs.contentBox.offsetHeight}px` : '0px'
        }
    }
}
</script>
