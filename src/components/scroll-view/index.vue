<template>
    <div class="am-scrollview">
        <div class="am-scrollview-wapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import IScroll from 'iscroll'

export default {
    data () {
        return {
            IScroll: null
        }
    },
    mounted () {
        this.IScroll = new IScroll(this.$el, {
            mouseWheel: true,
            scrollbars: true
        })
    }
}
</script>

<style>
</style>
