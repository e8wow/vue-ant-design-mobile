<template>
    <div :class="`${prefixCls}-brief`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            prefixCls: 'am-list'
        }
    }
}
</script>
