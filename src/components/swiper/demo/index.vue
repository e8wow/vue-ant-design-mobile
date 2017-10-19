<template>
    <swiper :speed="300">
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
        <scroll-bar slot="scrollBar" hide drag snap></scroll-bar>
        <pagination slot="pagination"></pagination>
    </swiper>
</template>

<script>
import Swiper from '../index.vue'
import Slide from '../Slide'
import Pagination from '../Pagination'
import ScrollBar from '../ScrollBar'

export default {
    components: {Swiper, Slide, Pagination, ScrollBar}
}
</script>

<style>
    .slide {
        height: 300px;
    }
</style>
