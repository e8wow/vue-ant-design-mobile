<template>
    <div @touchstart="touchstart($event)" @touchend="touchend($event)" @touchcancel="touchend($event)"
         :class="wrapCls">
        <div v-if="thumb||$slots.thumb" :class="`${prefixCls}-thumb`">
            <slot v-if="$slots.thumb" name="thumb"></slot>
            <img v-else-if="thumb" :src="thumb">
        </div>
        <div :class="lineCls">
            <div :class="`${prefixCls}-content`">
                <slot></slot>
            </div>
            <div v-if="extra||$slots.extra" :class="`${prefixCls}-extra`">
                <slot name="extra"></slot>
                {{extra}}
            </div>
            <div v-if="arrow" :class="arrowCls" aria-hidden="true"></div>
        </div>
        <ripple2 v-if="platform==='android'"/><!-- // TODO IOS样式没有写 -->
    </div>
</template>

<script>
import Ripple2 from '../ripple/ripple2.vue'

export default {
    components: {Ripple2},
    props: {
        thumb: String,
        extra: String,
        arrow: String,
        align: {
            type: String,
            default: 'middle'
        },
        onLongPress: {
            type: Function,
            default: () => {}
        },
        error: Boolean,
        multipleLine: Boolean,
        wrap: Boolean,
        activeStyle: Object, // TODO 可能不是Object可能是String
        platform: {
            type: String,
            default: 'ios'
        },
        disabled: Boolean
    },
    computed: {
        wrapCls () {
            return [
                `${this.prefixCls}-item`,
                {[`${this.prefixCls}-item-disabled`]: this.disabled},
                {[`${this.prefixCls}-item-error`]: this.error},
                {[`${this.prefixCls}-item-top`]: this.align === 'top'},
                {[`${this.prefixCls}-item-middle`]: this.align === 'middle'},
                {[`${this.prefixCls}-item-bottom`]: this.align === 'bottom'}
            ]
        },
        lineCls () {
            return [
                `${this.prefixCls}-line`,
                {[`${this.prefixCls}-line-multiple`]: this.multipleLine},
                {[`${this.prefixCls}-line-wrap`]: this.wrap}
            ]
        },
        arrowCls () {
            return [
                `${this.prefixCls}-arrow`,
                {[`${this.prefixCls}-arrow-horizontal`]: this.arrow === 'horizontal'},
                {[`${this.prefixCls}-arrow-vertical`]: this.arrow === 'down' || this.arrow === 'up'},
                {[`${this.prefixCls}-arrow-vertical-up`]: this.arrow === 'up'}
            ]
        }
    },
    data () {
        return {
            prefixCls: 'am-list',
            touching: false,
            touchingClock: null
        }
    },
    methods: {
        touchstart ($event) {
            this.touching = true
            if (!this.touchingClock) {
                this.touchingClock = setTimeout(() => {
                    if (this.touching) {
                        $event.preventDefault()
                        this.onLongPress()
                    }
                }, 450)
            }
        },
        touchend ($event) {
            this.touching = false
            window.clearTimeout(this.touchingClock)
            this.touchingClock = null
        }
    }
}
</script>
