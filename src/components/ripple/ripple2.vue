<template>
    <div class="vue-am-ripple">
    </div>
</template>

<script>
export default {
    mounted () {
        this.$parent.$el.addEventListener('touchstart', this.handleTouchStart)
    },
    beforeDestroy () {
        this.$parent.$el.removeEventListener('touchstart', this.handleTouchStart)
    },
    methods: {
        handleTouchStart ($event) {
            let Item = this.$parent.$el
            let RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth)
            const ClientRect = Item.getBoundingClientRect()
            let pointX = $event.changedTouches[0].clientX - ClientRect.left - Item.offsetWidth / 2
            let pointY = $event.changedTouches[0].clientY - ClientRect.top - Item.offsetWidth / 2

            const ripple = document.createElement('div')
            ripple.style.width = `${RippleWidth}px`
            ripple.style.height = `${RippleWidth}px`
            ripple.style.left = `${pointX}px`
            ripple.style.top = `${pointY}px`
            ripple.className = 'vue-am-ripple-el'
            this.$el.appendChild(ripple)

            setTimeout(() => {
                this.$el.removeChild(ripple)
            }, 1000)
        }
    }
}
</script>

<style>
    .vue-am-ripple-el {
        position: absolute;
        display: inline-block;
        pointer-events: none;
        overflow: hidden;
        will-change: box-shadow, transform;
        transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);
        outline: none;
        cursor: pointer;
        border-radius: 100%;
        transform: scale(0);
        background-color: hsla(0, 0%, 62%, .2);
        animation: ripple 1s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
</style>
