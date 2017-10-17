<template>
    <div :class="`${prefixCls}-item`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            prefixCls: 'am-flexbox'
        }
    }
}
</script>
