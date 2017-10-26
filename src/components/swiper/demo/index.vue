<template>
    <div>
        <swiper :initialSlide="0" autoHeight :autoplay="1500" :speed="300">
            <slide class="slide">
                <p>11</p>
                <p>11</p>
                <p>11</p>
                <p>11</p>
                <p>11</p>
            </slide>
            <slide class="slide">
                <p>22</p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
            </slide>
            <slide class="slide">
                <p v-for="t in test">{{t}}</p>
            </slide>
            <navigation-button slot="navigation"></navigation-button>
            <scroll-bar slot="scrollBar" hide drag snap></scroll-bar>
            <pagination slot="pagination"></pagination>
        </swiper>
        <button @click="t">1</button>
    </div>
</template>

<script>
import Swiper from '../index.vue'
import Slide from '../Slide'

import NavigationButton from '../NavigationButton'
import Pagination from '../Pagination'
import ScrollBar from '../ScrollBar'

export default {
    components: {
        Swiper,
        Slide,
        NavigationButton,
        Pagination,
        ScrollBar
    },
    data () {
        return {
            test: ['33', '33', '33', '33', '33', '33', '33']
        }
    },
    methods: {
        t () {
            this.test.push('123')
        }
    }
}
</script>
