<template>
    <swiper :speed="300" loop>
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
        </slide>
        <slide class="slide">
            <p>33</p>
            <p>33</p>
            <p>33</p>
            <p>33</p>
            <p>33</p>
        </slide>
        <navigation-button slot="navigation"></navigation-button>
        <scroll-bar slot="scrollBar" hide drag snap></scroll-bar>
        <pagination slot="pagination"></pagination>
    </swiper>
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
    }
}
</script>
