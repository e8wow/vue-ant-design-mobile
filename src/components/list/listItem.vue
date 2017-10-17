<template>
    <div @touchstart="touchstart($event)" @touchend="touchend" @touchcancel="touchend"
         :class="wrapCls" :style="touching ? activeStyle : ''">
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
        <ripple2 v-if="!disabled && activeType === 'android'"></ripple2>
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
        activeStyle: [Object, String],
        platform: {
            type: String,
            default: 'cross'
        },
        disabled: Boolean
    },
    computed: {
        activeType () {
            if (this.platform === 'cross') {
                let u = navigator.userAgent
                let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 为什么不用includes来判断是否存在呢，因为有些浏览器不支持~~~~所以~~
                return isAndroid ? 'android' : 'ios'
            }
            return this.platform
        },
        wrapCls () {
            return [
                `${this.prefixCls}-item`,
                {[`${this.prefixCls}-item-active`]: !this.disabled && this.touching && this.activeType === 'ios'},
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
        touchend () {
            this.touching = false
            window.clearTimeout(this.touchingClock)
            this.touchingClock = null
        }
    }
}
</script>
