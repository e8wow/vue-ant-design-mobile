<template>
    <list :class="wrapCls">
        <div @click="isOpen = !isOpen" slot="header" :class="`${this.prefixCls}`">
            <div :class="`${this.prefixCls}-name`">{{title}}</div>
            <div :class="`${this.prefixCls}-arrow`">
                <i></i>
            </div>
        </div>
        <list-item arrow="horizontal" v-show="isOpen" @click.native="go(item.link)" :key="index"
                   v-for="(item,index) in list">
            {{`${item.title}`}}
        </list-item>
    </list>
</template>

<script>
import { List, ListItem } from '../../../main'

export default {
    components: {
        List, ListItem
    },
    props: {
        prefixCls: {
            type: String,
            default: 'am-demo-category'
        },
        title: String,
        list: Array
    },
    data () {
        return {
            isOpen: false
        }
    },
    computed: {
        wrapCls () {
            return [
                {'category-open': this.isOpen},
                {'category-closed': !this.isOpen}
            ]
        }
    },
    methods: {
        go (path) {
            setTimeout(() => {
                this.$router.push(path)
            }, 500)
        }
    }
}
</script>
