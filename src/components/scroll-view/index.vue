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
        console.log(this.$el.style)
        this.IScroll = new IScroll(document.querySelector('.am-scrollview'))
    }
}
</script>

<style>
</style>
